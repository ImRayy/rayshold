export const addCopyCodeButton = () => {
  const codeblocks = Array.from(document.querySelectorAll("pre"));

  for (const codeblock of codeblocks) {
    const copyIcon = Object.assign(document.createElement("span"), {
      className: "iconify tabler--copy",
    });

    const doneIcon = Object.assign(document.createElement("span"), {
      className: "iconify tabler--check",
    });

    const wrapper = document.createElement("div");
    const copyBtn = Object.assign(document.createElement("button"), {
      className:
        "absolute right-2 top-2 flex size-8 items-center justify-center rounded-lg  bg-zinc-700 text-zinc-200 text-lg",
    });

    copyBtn.append(copyIcon);

    copyCode(codeblock, copyBtn, copyIcon, doneIcon);
    wrapper.style.position = "relative";
    codeblock.parentNode?.insertBefore(wrapper, codeblock);
    wrapper.appendChild(codeblock);
    wrapper.appendChild(copyBtn);
  }

  async function copyCode(
    block: HTMLElement,
    btn: HTMLButtonElement,
    clipboardIcon: HTMLSpanElement,
    doneIcon: HTMLSpanElement
  ) {
    const text = block.innerText;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text ?? "");
        btn.firstChild?.replaceWith(doneIcon);
        const prev = btn.className;
        btn.classList.replace("bg-zinc-700", "bg-info");
        btn.className = `${btn.className} text-core`;

        setTimeout(() => {
          btn.firstChild?.replaceWith(clipboardIcon);
          btn.className = prev;
        }, 2000);
      } catch (err) {
        alert(err);
        console.error(err);
      }
    });
  }
};
