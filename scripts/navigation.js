const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.textContent = "✕";
    } else {
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
    }

});