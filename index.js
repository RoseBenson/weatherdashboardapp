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