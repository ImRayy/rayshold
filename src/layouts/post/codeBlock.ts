import { Clipboard, CircleCheckBig } from "lucide";
import { createIconElement } from "@utils/lucide-icon";

export function addCopyCodeButton() {
  const codeblocks = Array.from(document.querySelectorAll("pre"));

  codeblocks.forEach((codeblock) => {
    const clipboardIcon = createIconElement(Clipboard);
    const doneIcon = createIconElement(CircleCheckBig, "text-success");

    // const copyBtn = template?.cloneNode(true) as HTMLButtonElement;
    const wrapper = document.createElement("div");
    const copyBtn = document.createElement("button");
    copyBtn.className =
      "top-2 right-2 absolute border p-1.5 shadow-sm shadow-crust border-secondary bg-secondary rounded-md";
    copyBtn.append(clipboardIcon);

    copyCode(codeblock, copyBtn, clipboardIcon, doneIcon);
    wrapper.style.position = "relative";
    codeblock.parentNode?.insertBefore(wrapper, codeblock);
    wrapper.appendChild(codeblock);
    wrapper.appendChild(copyBtn);
  });

  async function copyCode(
    block: HTMLElement,
    btn: HTMLButtonElement,
    clipboardIcon: SVGElement,
    doneIcon: SVGElement
  ) {
    const text = block.innerText;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text ?? "");
        btn.firstChild?.replaceWith(doneIcon);

        setTimeout(() => {
          btn.firstChild?.replaceWith(clipboardIcon);
        }, 5000);
      } catch (err) {
        alert(err);
        console.error(err);
      }
    });
  }
}
