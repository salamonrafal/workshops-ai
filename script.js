const clockElement = document.querySelector(".clock");
const dateElement = document.querySelector(".date");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-toggle__label");
const weatherTemp = document.querySelector(".weather-widget__temp");
const weatherMeta = document.querySelector(".weather-widget__meta");

const weatherPresets = [
  { city: "Warsaw", temp: 21, condition: "Clear sky", humidity: 38, wind: 11 },
  { city: "Night City", temp: 27, condition: "Neon haze", humidity: 44, wind: 16 },
  { city: "Tokyo", temp: 19, condition: "Light rain", humidity: 61, wind: 9 },
  { city: "Los Angeles", temp: 24, condition: "Warm breeze", humidity: 35, wind: 7 }
];

function readStoredTheme() {
  try {
    return localStorage.getItem("new-tab-theme");
  } catch {
    return null;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem("new-tab-theme", theme);
  } catch {
    // Storage can be unavailable in preview or privacy-restricted contexts.
  }
}

function formatClock(now) {
  return new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(now);
}

function formatDate(now) {
  return new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
}

function updateTime() {
  const now = new Date();
  clockElement.textContent = formatClock(now);
  dateElement.textContent = formatDate(now);
}

function getPreferredTheme() {
  const storedTheme = readStoredTheme();
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeLabel.textContent = theme === "light" ? "Dark Mode" : "Light Mode";
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  persistTheme(nextTheme);
}

function renderWeather() {
  const dayIndex = new Date().getDate() % weatherPresets.length;
  const weather = weatherPresets[dayIndex];

  weatherTemp.textContent = `${weather.temp}°C`;
  weatherMeta.innerHTML = `
    <strong>${weather.city}</strong>
    <span>${weather.condition}</span>
    <span>Humidity ${weather.humidity}%</span>
    <span>Wind ${weather.wind} km/h</span>
  `;
}

applyTheme(getPreferredTheme());
renderWeather();
updateTime();

themeToggle.addEventListener("click", toggleTheme);
window.setInterval(updateTime, 1000);
