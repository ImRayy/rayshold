import {
  CircleCheckBig,
  CircleHelp,
  CircleX,
  Info,
  NotebookPen,
  Quote,
  TriangleAlert,
} from "lucide";
import { createIconElement } from "@utils/lucide-icon";

export function addCallouts() {
  // Getting blockquote element
  const blockquote = document.querySelectorAll("blockquote");

  // Filtering out content within "[]"
  const regix = /\[(.*?)\]/;

  // Icons
  const infoIcon = createIconElement(Info, "text-info");
  const noteIcon = createIconElement(NotebookPen, "text-info");
  const successIcon = createIconElement(CircleCheckBig, "text-success");
  const alertIcon = createIconElement(TriangleAlert, "text-alert");
  const errorIcon = createIconElement(CircleX, "text-error");
  const questionIcon = createIconElement(CircleHelp, "text-alert");
  const quoteIcon = createIconElement(Quote);

  blockquote.forEach((quote) => {
    quote.className = "m-2.5 p-0 font-normal";

    const wrapper = document.createElement("div");
    const wrapperTitle = document.createElement("div");
    const items = quote.firstElementChild?.innerHTML.split("\n");
    const calloutType = items?.[0]?.match(regix)?.[1]?.toLowerCase();
    const calloutTitle = items?.[0]?.split(regix)[2];

    quote.parentNode?.insertBefore(wrapper, quote);
    wrapper.appendChild(quote);
    wrapper.prepend(wrapperTitle);
    wrapper.className = "mt-4 border-2 rounded-md";

    wrapperTitle.className =
      "p-2 h-10 inline-flex items-center gap-2 w-full border-b-2 text-lg";

    // Used if else instead of ternary operator which considered more clean
    // cause I wanted to capitalize text if title not given
    if (calloutTitle) {
      wrapperTitle.innerText = calloutTitle;
    } else {
      wrapperTitle.innerText = `${calloutType ?? "Quote"}`;
      wrapperTitle.classList.add("capitalize");
    }

    // Adds everything inside blockquote except parameter & title
    if (items?.length === 1) {
      quote.innerText = items?.[0] ?? "";
    } else {
      quote.innerHTML = items?.splice(1).join(" ") ?? "";
    }

    // Sets color & icon based on given parameter
    // NOTE: I could have used a wrapper to follow dry but tailwind
    // is wired it behaves unexpectedly with dynamic colors if not
    // defined as string before
    switch (calloutType) {
      case "info":
        wrapperTitle.prepend(infoIcon);
        wrapper.classList.add(`border-info`);
        wrapperTitle.classList.add(`bg-info/20`, `border-info`);
        break;
      case "note":
        wrapperTitle.prepend(noteIcon);
        wrapper.classList.add(`border-info`);
        wrapperTitle.classList.add(`bg-info/20`, `border-info`);
        break;
      case "error":
        wrapperTitle.prepend(errorIcon);
        wrapper.classList.add(`border-error`);
        wrapperTitle.classList.add(`bg-error/20`, `border-error`);
        break;
      case "alert":
        wrapperTitle.prepend(alertIcon);
        wrapper.classList.add(`border-alert`);
        wrapperTitle.classList.add(`bg-alert/20`, `border-alert`);
        break;
      case "question":
        wrapperTitle.prepend(questionIcon);
        wrapper.classList.add(`border-alert`);
        wrapperTitle.classList.add(`bg-alert/20`, `border-alert`);
        break;
      case "success":
        wrapperTitle.prepend(successIcon);
        wrapper.classList.add(`border-success`);
        wrapperTitle.classList.add(`bg-success/20`, `border-success`);
        break;
      default:
        wrapperTitle.prepend(quoteIcon);
        wrapper.classList.add(`border-border`);
        wrapperTitle.classList.add(`border-border`, "bg-secondary");
        break;
    }

    // Removes margin from image within blockquote
    quote.querySelectorAll("img").forEach((img) => {
      img.className = "m-0";
    });
  });
}
