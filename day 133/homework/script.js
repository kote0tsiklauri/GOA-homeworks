const weatherData = [
    { city: "Tbilisi", temperature: 22, humidity: 55, windSpeed: 3.5, weatherMain: "Clouds", weatherDescription: "scattered clouds", weatherIcon: "03d" },
    { city: "Batumi", temperature: 25, humidity: 60, windSpeed: 4.2, weatherMain: "Clear", weatherDescription: "clear sky", weatherIcon: "01d" },
    { city: "Kutaisi", temperature: 20, humidity: 50, windSpeed: 2.8, weatherMain: "Rain", weatherDescription: "light rain", weatherIcon: "10d" },
    { city: "Rustavi", temperature: 23, humidity: 58, windSpeed: 3.0, weatherMain: "Clouds", weatherDescription: "broken clouds", weatherIcon: "04d" },
    { city: "Gori", temperature: 21, humidity: 52, windSpeed: 3.1, weatherMain: "Fog", weatherDescription: "foggy", weatherIcon: "50d" }
];

const input = document.getElementById("cityInput")
const button = document.getElementById("searchBtn")
const result = document.getElementById("weatherResult")

button.addEventListener("click", () => {
const cityName = input.value.trim()
const cityData = weatherData.find(item => item.city.toLowerCase() === cityName.toLowerCase())
    
if (cityData) {
    result.innerHTML = `
        <h3>${cityData.city}</h3>
        <p>ტემპერატურა: ${cityData.temperature}°C</p>
        <p>ტენიანობა: ${cityData.humidity}%</p>
        <p>ქარის სიჩქარე: ${cityData.windSpeed} მ/წმ</p>
        <p>${cityData.weatherDescription}</p>
        <img src="https://openweathermap.org/img/wn/${cityData.weatherIcon}.png" alt="icon">`
    } else {
      result.innerHTML = `<p style="color:red;">ქალაქი "${cityName}" ვერ მოიძებნა!</p>`
    }
});