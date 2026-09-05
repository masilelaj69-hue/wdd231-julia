// Get the current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Display the date the page was last modified
document.querySelector("#lastModified").textContent =
    document.lastModified;