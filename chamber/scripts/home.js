const weatherURL =
    "https://api.open-meteo.com/v1/forecast?latitude=43.8008&longitude=-111.7666&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=fahrenheit&timezone=America%2FDenver";

const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy rain showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with hail"
};


async function getWeather() {
    const currentWeather = document.querySelector("#current-weather");
    const forecastContainer = document.querySelector("#weather-forecast");

    try {
        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();

        const currentTemp = Math.round(data.current.temperature_2m);
        const currentCode = data.current.weather_code;

        currentWeather.innerHTML = `
            <h3>Current Weather</h3>
            <p class="temperature">${currentTemp}°F</p>
            <p>${weatherDescriptions[currentCode] || "Weather information"}</p>
        `;

        let forecastHTML = `
            <h3>3-Day Forecast</h3>
            <div class="forecast-grid">
        `;

        for (let i = 0; i < 3; i++) {
            const date = new Date(data.daily.time[i] + "T12:00:00");

            const dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            const high = Math.round(data.daily.temperature_2m_max[i]);
            const low = Math.round(data.daily.temperature_2m_min[i]);
            const code = data.daily.weather_code[i];

            forecastHTML += `
                <article>
                    <h4>${dayName}</h4>
                    <p><strong>High:</strong> ${high}°F</p>
                    <p><strong>Low:</strong> ${low}°F</p>
                    <p>${weatherDescriptions[code] || "Weather information"}</p>
                </article>
            `;
        }

        forecastHTML += `
            </div>
        `;

        forecastContainer.innerHTML = forecastHTML;

    } catch (error) {
        console.error("Weather error:", error);

        currentWeather.innerHTML = `
            <h3>Current Weather</h3>
            <p>Weather information is currently unavailable.</p>
        `;

        forecastContainer.innerHTML = `
            <h3>3-Day Forecast</h3>
            <p>Forecast information is currently unavailable.</p>
        `;
    }
}


async function getMembers() {
    const spotlightContainer =
        document.querySelector("#business-spotlights");

    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Member data could not be loaded");
        }

        const members = await response.json();

        const qualifiedMembers = members.filter(
            member =>
                member.membership === 2 ||
                member.membership === 3
        );

        const selectedMembers = qualifiedMembers
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        spotlightContainer.innerHTML = `
            <h2>Business Spotlights</h2>

            <div class="spotlight-grid">
                ${selectedMembers.map(member => `
                    <article class="member-card">

                        <img
                            src="images/${member.image}"
                            alt="${member.name}"
                            loading="lazy"
                        >

                        <h3>${member.name}</h3>

                        <p>${member.description}</p>

                        <p>
                            <strong>Address:</strong>
                            ${member.address}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            ${member.phone}
                        </p>

                        <p>
                            <strong>Membership:</strong>
                            ${member.membership === 3
                                ? "Gold"
                                : "Silver"}
                        </p>

                        <a
                            href="${member.website}"
                            target="_blank"
                            rel="noopener"
                        >
                            Visit Website
                        </a>

                    </article>
                `).join("")}
            </div>
        `;

    } catch (error) {
        console.error("Member error:", error);

        spotlightContainer.innerHTML = `
            <h2>Business Spotlights</h2>
            <p>Business information is currently unavailable.</p>
        `;
    }
}


getWeather();
getMembers();