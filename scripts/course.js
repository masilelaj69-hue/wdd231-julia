// ===============================
// Buttons
// ===============================

function setActiveButton(button) {
    document.querySelectorAll(".filter-button").forEach(item => {
        item.classList.remove("active-filter");
    });

    button.classList.add("active-filter");
}

allButton.addEventListener("click", () => {
    displayCourses(courses);
    setActiveButton(allButton);
});

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(
        course => course.subject === "WDD"
    );

    displayCourses(wddCourses);
    setActiveButton(wddButton);
});

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(
        course => course.subject === "CSE"
    );

    displayCourses(cseCourses);
    setActiveButton(cseButton);
});