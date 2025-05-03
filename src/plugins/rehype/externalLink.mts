import { visit } from "unist-util-visit";
import type { RehypePlugin } from "@astrojs/markdown-remark";
import type { Element } from "hast";

interface Options {
  domain: string;
}

// @credits https://www.larrymyers.com/posts/how-to-create-an-astro-markdown-plugin/
export const externalLink: RehypePlugin = (options?: Options) => {
  return (tree) =>
    visit(tree, (node) => {
      if (node.type !== "element") return;

      const element = node as Element;

      if (!isAnchor(element)) {
        return;
      }

      const url = getUrl(element);

      if (isExternal(url, options?.domain ?? "")) {
        element.properties!["target"] = "_blank";
      }
    });
};

const isAnchor = (element: Element) =>
  element.tagName == "a" && element.properties && "href" in element.properties;

const getUrl = (element: Element): string => {
  if (!element.properties) return "";

  const url = element.properties["href"];

  if (!url) return "";

  return url.toString();
};

const isExternal = (url: string, domain: string) =>
  url.startsWith("http") && !url.includes(domain);
