const apiKey = "YOUR_OPENWEATHER_API_KEY";

// ---------------- WEATHER ----------------

const weatherURL =
    `https://api.openweathermap.org/data/2.5/weather?q=Teton,US&units=imperial&appid=${apiKey}`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=Teton,US&units=imperial&appid=${apiKey}`;


async function getWeather() {
    const currentWeather = document.querySelector("#current-weather");

    try {
        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const weather = await response.json();

        currentWeather.innerHTML = `
            <h3>Current Weather</h3>
            <div class="weather-current">
                <img 
                    src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"
                    alt="${weather.weather[0].description}"
                >
                <div>
                    <p class="temperature">${Math.round(weather.main.temp)}°F</p>
                    <p>${weather.weather[0].description}</p>
                </div>
            </div>
            <p>High: ${Math.round(weather.main.temp_max)}°F</p>
            <p>Low: ${Math.round(weather.main.temp_min)}°F</p>
            <p>Humidity: ${weather.main.humidity}%</p>
        `;

    } catch (error) {
        console.error("Weather error:", error);

        currentWeather.innerHTML = `
            <h3>Current Weather</h3>
            <p>Weather information is currently unavailable.</p>
        `;
    }
}


// ---------------- 3-DAY FORECAST ----------------

async function getForecast() {
    const forecastContainer = document.querySelector("#weather-forecast");

    try {
        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error("Forecast request failed");
        }

        const data = await response.json();

        const days = data.list
            .filter(item => item.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        forecastContainer.innerHTML = `
            <h3>3-Day Forecast</h3>
            <div class="forecast-grid">
                ${days.map(day => `
                    <article>
                        <h4>
                            ${new Date(day.dt_txt).toLocaleDateString(
                                "en-US",
                                { weekday: "long" }
                            )}
                        </h4>

                        <p class="temperature">
                            ${Math.round(day.main.temp)}°F
                        </p>

                        <p>${day.weather[0].description}</p>
                    </article>
                `).join("")}
            </div>
        `;

    } catch (error) {
        console.error("Forecast error:", error);

        forecastContainer.innerHTML = `
            <h3>3-Day Forecast</h3>
            <p>Forecast information is currently unavailable.</p>
        `;
    }
}


// ---------------- BUSINESS SPOTLIGHTS ----------------

async function getMembers() {
    const spotlightContainer =
        document.querySelector("#business-spotlights");

    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Member data could not be loaded");
        }

        const members = await response.json();

        // Gold and Silver members only
        const qualifiedMembers = members.filter(
            member =>
                member.membership === 2 ||
                member.membership === 3
        );

        // Randomly select 3 businesses
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


// ---------------- RUN EVERYTHING ----------------

getWeather();
getForecast();
getMembers();