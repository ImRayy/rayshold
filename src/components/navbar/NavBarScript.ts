const darkModeButton = document.querySelector(
  ".dark-mode-button"
) as HTMLButtonElement;
const toggleSidebarButton = document.querySelector(
  ".sidebar-toggle-button"
) as HTMLButtonElement;
const sideBar = document.getElementById("sidebar");

function toggleClass(element: Element, className: string) {
  element.classList.toggle(className);
}

darkModeButton.addEventListener("click", () => {
  toggleClass(document.documentElement, "dark");
});

toggleSidebarButton.addEventListener("click", () => {
  if (sideBar) {
    toggleClass(sideBar, "-translate-x-full");
  }
});
