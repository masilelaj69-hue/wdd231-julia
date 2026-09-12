// ======================================
// NAVIGATION.JS
// WDD 231 - Chamber Site Navigation
// ======================================

// ===============================
// Select Elements
// ===============================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

// ===============================
// Toggle Navigation
// ===============================

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

}

// ===============================
// Reset Navigation on Resize
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth >= 768 && menuButton && navigation) {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    }

});

// ===============================
// Footer Current Year
// ===============================

const currentYear = document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

// ===============================
// Footer Last Modified Date
// ===============================

const lastModified = document.querySelector("#last-modified");

if (lastModified) {

    lastModified.textContent =
        `Last Modification: ${document.lastModified}`;

}