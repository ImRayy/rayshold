import { createElement, type IconNode } from "lucide";

// Creates element and add attributes
export function createIconElement(icon: IconNode, ...className: string[]) {
  const element = createElement(icon);
  element.style.width = "20";
  element.classList.add(...className);
  return element;
}
