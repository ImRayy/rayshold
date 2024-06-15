function toggleClass(element: Element, className: string) {
  element.classList.toggle(className);
}

// Buttons
const toggleSidebarButton = document.getElementById("sidebar-toggle");
const sidebarAckdrop = document.getElementById("sidebar-backdrop");

// Prevent click event on sidebar
document.getElementById("sidebar")?.addEventListener("click", (e) => {
  e.stopPropagation();
});

sidebarAckdrop?.addEventListener("click", toggleSidebar);
toggleSidebarButton?.addEventListener("click", toggleSidebar);

// Toggle didebar main logic
function toggleSidebar() {
  const sideBar = document.getElementById("sidebar-backdrop");
  if (sideBar) {
    toggleClass(sideBar, "-translate-x-full");
  }
}
