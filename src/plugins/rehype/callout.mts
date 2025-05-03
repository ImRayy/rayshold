import type { Properties } from "hast";
import type { Element } from "hast";
import { h } from "hastscript";

const Variants = {
  TIP: "tip",
  NOTE: "note",
  IMPORTANT: "important",
  CAUTION: "caution",
  WARNING: "warning",
} as const;

export type CalloutType = (typeof Variants)[keyof typeof Variants];

export function CalloutComponent(
  _: Properties,
  children: Element,
  type: CalloutType
) {
  if (!Array.isArray(children) || children.length === 0) {
    return h(
      "div",
      { class: "hidden" },
      'Invalid admonition directive. (Admonition directives must be of block type ":::note{name="name"} <content> :::")'
    );
  }

  return h("blockquote", { class: `callout type-${type}` }, [
    h("span", { class: "callout-title" }, type.toUpperCase()),
    ...children,
  ]);
}
