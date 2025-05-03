import React from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col justify-center ">
      <button
        id="accordion"
        className="inline-flex items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="-ml-1.5 inline-flex w-full items-center gap-1">
          <span
            className={`iconify text-xl transition-all duration-300 tabler--caret-right ${open ? "rotate-90" : ""}`}
          ></span>
          {title}
        </span>
      </button>
      <div
        className={`transition-all ease-in-out ${!open && "overflow-y-hidden"}`}
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="mt-2  rounded-lg bg-hover/40 p-4  pl-8" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
