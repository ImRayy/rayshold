// Dark Mode Toggle
const darkModeButton = document.querySelector(
  ".dark-mode-button"
) as HTMLButtonElement;
type Themes = "light" | "dark";

function saveTheme(theme: Themes) {
  let date = new Date();
  date.setTime(date.getTime() + 365 * 86400000);
  document.cookie = `theme=${theme};expires=${date.toUTCString()}`;
}

const sideBar = document.getElementById("sidebar");
const element = document.querySelector("html")?.classList;
const theme = document.cookie.match("theme=([^;]+)");

document.addEventListener("DOMContentLoaded", () => {
  if (theme && theme[1] === "dark") {
    element?.add("dark");
  }
});

darkModeButton.addEventListener("click", () => {
  if (element?.contains("dark")) {
    element.remove("dark");
    saveTheme("light");
  } else {
    element?.add("dark");
    saveTheme("dark");
  }
});

// Sidebar Toggle
function toggleClass(element: Element, className: string) {
  element.classList.toggle(className);
}

const toggleSidebarButton = document.querySelector(
  ".sidebar-toggle-button"
) as HTMLButtonElement;

toggleSidebarButton.addEventListener("click", () => {
  if (sideBar) {
    toggleClass(sideBar, "-translate-x-full");
  }
});
