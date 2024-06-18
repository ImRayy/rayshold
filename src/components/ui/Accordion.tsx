import React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col justify-center rounded-md border border-secondary">
      <button
        id="accordion"
        className="inline-flex items-center gap-1 bg-secondary/40 p-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="inline-flex w-full justify-between px-1 ">
          {title}
          <ChevronDown
            className={`transition-all duration-300 ${open ? "-rotate-180" : ""}`}
          />
        </span>
      </button>
      <div
        className={`overflow-y-hidden transition-all ease-in-out`}
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4 pl-8" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
