// ======================================
// WDD231 COURSE DATA
// ======================================

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


// ======================================
// GET HTML ELEMENTS
// ======================================

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


// ======================================
// DISPLAY COURSES
// ======================================

function displayCourses(courseList) {

    // Clear existing courses
    courseContainer.innerHTML = "";


    // Create a card for every course
    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");


        // Add completed/not completed class
        if (course.completed) {

            card.classList.add("completed");

        } else {

            card.classList.add("not-completed");

        }


        // Course information
        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>

            <p>${course.title}</p>

            <p>
                <strong>${course.credits}</strong>
                Credits
            </p>
        `;


        // Add card to page
        courseContainer.appendChild(card);

    });


    // ==================================
    // CALCULATE TOTAL CREDITS
    // ==================================

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );


    creditDisplay.textContent =
        `Total Credits: ${totalCredits}`;

}


// ======================================
// ALL COURSES BUTTON
// ======================================

allButton.addEventListener("click", () => {

    displayCourses(courses);

});


// ======================================
// WDD COURSES BUTTON
// ======================================

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(
        course => course.subject === "WDD"
    );

    displayCourses(wddCourses);

});


// ======================================
// CSE COURSES BUTTON
// ======================================

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(
        course => course.subject === "CSE"
    );

    displayCourses(cseCourses);

});


// ======================================
// INITIAL DISPLAY
// ======================================

displayCourses(courses);