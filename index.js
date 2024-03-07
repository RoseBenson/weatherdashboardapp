 /*
  //Api Key 
  const APIkey = "45dab8e6208f47cd0aa42f480c18d1ce";

  var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}`;
  console.log(queryUrl);
  

  // Api Key
const APIkey = "45dab8e6208f47cd0aa42f480c18d1ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

*/
const APIkey = "45dab8e6208f47cd0aa42f480c18d1ce";
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const currentWeatherDiv = document.getElementById('currentWeather');
const forecastDiv = document.getElementById('forecast');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city !== '') {
      try {
        const currentWeatherData = await getCurrentWeather(city);
        const forecastData = await getForecast(city);
        displayCurrentWeather(currentWeatherData);
        displayForecast(forecastData);
      } catch (error) {
        console.error("Error:", error);
        showError("Could not fetch weather data. Please try again later.");
      }
    }
    
  });
  
  async function getCurrentWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
    if (!response.ok) {
      throw new Error('Unable to fetch current weather data');
    }
    return await response.json();
  }
  
  async function getForecast(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`);
    if (!response.ok) {
      throw new Error('Unable to fetch forecast data');
    }
    return await response.json();
  }
  
  function displayCurrentWeather(data) {
    const { name, main, weather, wind } = data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  
    const currentWeatherHTML = `
      <h2>${name}</h2>
      <p>Date: ${new Date().toLocaleDateString()}</p>
      <img src="${iconUrl}" alt="${weather[0].description}">
      <p>Temperature: ${main.temp}°C</p>
      <p>Humidity: ${main.humidity}%</p>
      <p>Wind Speed: ${wind.speed} m/s</p>
    `;
  
    currentWeatherDiv.innerHTML = currentWeatherHTML;
  }
  
 