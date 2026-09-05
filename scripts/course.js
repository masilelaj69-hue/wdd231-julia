const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },

    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    }
];


// ===============================
// Elements
// ===============================

const courseContainer =
    document.querySelector("#courseContainer");

const creditDisplay =
    document.querySelector("#creditDisplay");

const allButton =
    document.querySelector("#allButton");

const wddButton =
    document.querySelector("#wddButton");

const cseButton =
    document.querySelector("#cseButton");


// ===============================
// Display Courses
// ===============================

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {

            card.classList.add("completed");

        } else {

            card.classList.add("not-completed");

        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p><strong>${course.credits}</strong> Credits</p>
        `;

        courseContainer.appendChild(card);

    });


    // ===============================
    // Total Credits
    // ===============================

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditDisplay.textContent =
        `Total Credits: ${totalCredits}`;
}


// ===============================
// Buttons
// ===============================

allButton.addEventListener("click", () => {

    displayCourses(courses);

});


wddButton.addEventListener("click", () => {

    const wddCourses =
        courses.filter(course => course.subject === "WDD");

    displayCourses(wddCourses);

});


cseButton.addEventListener("click", () => {

    const cseCourses =
        courses.filter(course => course.subject === "CSE");

    displayCourses(cseCourses);

});


// ===============================
// Initial Display
// ===============================

displayCourses(courses);