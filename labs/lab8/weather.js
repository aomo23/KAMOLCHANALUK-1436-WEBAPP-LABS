import axios from "axios";

const API_KEY = "a0d851238cc64abdabc131221250910";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const city = process.argv.slice(2).join(" ");

if (!city) {
  console.error("Error: Please provide city name");
  console.error("Usage: node weather.js <city name>");
  console.error("Examples: node weather.js 'Khon Kaen'");
  console.error("Note: Use quotes for city names with spaces.");
  process.exit(1);
}

async function getWeather(cityName) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: cityName,
        aqi: "no",
      },
    });

    const data = response.data;
    const tempC = data.current.temp_c;
    const condition = data.current.condition.text;

    console.log(`Current weather in ${data.location.name}, ${data.location.country}:`);
    console.log(`Temperature: ${tempC}°C`);
    console.log(`Condition: ${condition}`);
  } catch (error) {
    if (error.response) {
      console.error("Error:", error.response.data.error?.message || "Invalid API response.");
    } else if (error.request) {
      console.error("Error: No response from WeatherAPI. Check your internet connection.");
    } else {
      console.error("Error:", error.message);
    }
    process.exit(1);
  }
}

getWeather(city);
