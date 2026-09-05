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
        completed: false
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        subject: "CSE",
        number: 212,
        title: "Programming with Data Structures",
        credits: 2,
        completed: false
    },

    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    }
];


const courseContainer = document.querySelector("#courses");
const creditsElement = document.querySelector("#credits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");


function displayCourses(courseList) {

    courseContainer.innerHTML = "";


    courseList.forEach(course => {

        const card = document.createElement("article");

        card.classList.add("course-card");


        if (course.completed) {
            card.classList.add("completed");
        }


        const title = document.createElement("h3");

        title.textContent =
            `${course.subject} ${course.number}`;


        const courseName = document.createElement("p");

        courseName.textContent =
            course.title;


        const creditText = document.createElement("p");

        creditText.textContent =
            `${course.credits} credit(s)`;


        card.appendChild(title);
        card.appendChild(courseName);
        card.appendChild(creditText);


        if (course.completed) {

            const completed = document.createElement("span");

            completed.classList.add("completed-label");

            completed.textContent = "Completed";

            card.appendChild(completed);
        }


        courseContainer.appendChild(card);

    });


    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );


    creditsElement.textContent = totalCredits;
}


function setActiveButton(button) {

    document.querySelectorAll(".filter-button")
        .forEach(item => {
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


displayCourses(courses);