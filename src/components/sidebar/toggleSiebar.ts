function toggleClass(element: Element, className: string) {
  element.classList.toggle(className);
}

// Buttons
const toggleSidebarButton = document.getElementById("sidebar-toggle");

// Prevent click event on sidebar
document.getElementById("sidebar")?.addEventListener("click", (e) => {
  e.stopPropagation();
});

const sideBar = document.getElementById("sidebar");
const html = document.documentElement;
const backdrop = document.getElementById("sidebar-backdrop");

backdrop?.addEventListener("click", toggleSidebar);
toggleSidebarButton?.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sideBar && toggleClass(sideBar, "-translate-x-full");
  html && toggleClass(html, "overflow-y-hidden");
  backdrop && toggleClass(backdrop, "active");
  backdrop && backdrop.setAttribute("data-state", "active");
}
