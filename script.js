const clockElement = document.querySelector("[data-clock]");
const dateElement = document.querySelector("[data-date]");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle__label");

const weatherElements = {
  location: document.querySelector("[data-weather-location]"),
  temp: document.querySelector("[data-weather-temp]"),
  condition: document.querySelector("[data-weather-condition]"),
  wind: document.querySelector("[data-weather-wind]"),
  humidity: document.querySelector("[data-weather-humidity]"),
  rain: document.querySelector("[data-weather-rain]")
};

const mockWeather = {
  location: "Biały Sad",
  tempC: 12,
  condition: "Chłodny wiatr i ciężkie chmury",
  windKmh: 14,
  humidity: 72,
  rainChance: 10
};

const timeFormatter = new Intl.DateTimeFormat("pl-PL", {
  hour: "2-digit",
  minute: "2-digit"
});

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  weekday: "long",
  day: "numeric",
  month: "long"
});

function updateClock() {
  const now = new Date();

  if (clockElement) {
    clockElement.textContent = timeFormatter.format(now);
  }

  if (dateElement) {
    const formattedDate = dateFormatter.format(now);
    dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "theme-light" : "theme-dark";
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(nextTheme);

  if (themeToggleLabel) {
    themeToggleLabel.textContent = theme === "light" ? "Light" : "Dark";
  }
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("theme-light") ? "light" : "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("new-tab-theme", nextTheme);
  applyTheme(nextTheme);
}

function loadTheme() {
  const storedTheme = localStorage.getItem("new-tab-theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const preferredTheme = storedTheme || (systemPrefersLight ? "light" : "dark");
  applyTheme(preferredTheme);
}

function renderWeather(data) {
  weatherElements.location.textContent = data.location;
  weatherElements.temp.textContent = `${data.tempC}°C`;
  weatherElements.condition.textContent = data.condition;
  weatherElements.wind.textContent = `${data.windKmh} km/h`;
  weatherElements.humidity.textContent = `${data.humidity}%`;
  weatherElements.rain.textContent = `${data.rainChance}%`;
}

loadTheme();
renderWeather(mockWeather);
updateClock();

window.setInterval(updateClock, 1000);

themeToggle?.addEventListener("click", toggleTheme);
