const membersContainer = document.querySelector("#members-container");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

async function getMembers() {
    try {
        const response = await fetch("./data/members.json");

        if (!response.ok) {
            throw new Error("Could not load members.json");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML = `
            <p class="error-message">
                Sorry, the business directory could not be loaded.
            </p>
        `;
    }
}

function getMembership(level) {
    if (level === 3) {
        return "Gold Member";
    }

    if (level === 2) {
        return "Silver Member";
    }

    return "Member";
}

function createMemberCard(member) {
    const card = document.createElement("article");

    card.classList.add("member-card");

    card.innerHTML = `
        <img 
            src="./images/${member.image}" 
            alt="${member.name} logo"
            loading="lazy"
            width="180"
            height="180"
        >

        <h3>${member.name}</h3>

        <p><strong>Industry:</strong> ${member.industry}</p>

        <p>${member.description}</p>

        <p>
            <strong>Address:</strong><br>
            ${member.address}
        </p>

        <p>
            <strong>Phone:</strong><br>
            ${member.phone}
        </p>

        <p>
            <strong>Email:</strong><br>
            <a href="mailto:${member.email}">
                ${member.email}
            </a>
        </p>

        <p>
            <strong>Membership:</strong><br>
            ${getMembership(member.membership)}
        </p>

        <p>
            <a 
                href="${member.website}" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Visit Website
            </a>
        </p>
    `;

    return card;
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = createMemberCard(member);
        membersContainer.appendChild(card);
    });
}

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});

getMembers();