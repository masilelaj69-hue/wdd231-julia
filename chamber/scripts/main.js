// =========================
// Mobile Navigation
// =========================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});


// =========================
// Footer Dates
// =========================

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = document.lastModified;