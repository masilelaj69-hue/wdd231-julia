// ======================================
// CURRENT YEAR
// ======================================

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent =
    currentYear;


// ======================================
// LAST MODIFIED
// ======================================

document.querySelector("#lastModified").textContent =
    document.lastModified;