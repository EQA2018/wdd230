const currweatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=97d75aaa7ad1a3a956b14c369172fdaf";
const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=97d75aaa7ad1a3a956b14c369172fdaf";

fetch(currweatherURL)
  .then((response) => response.json())
  .then((currweather) => {
      
    console.log(currweather);
    document.querySelector('#t').textContent = Math.round(currweather.main.temp * 10) / 10;
    document.querySelector('#s').textContent = Math.round(currweather.wind.speed * 10) / 10;
    document.querySelector('.humidity').textContent = `${currweather.main.humidity}%`;
    document.querySelector('.cloudy').textContent = currweather.weather[0].description;
    let f;
    if (currweather.main.temp <= 50 && currweather.wind.speed > 3) {
      f = `${Math.round((35.74 + (0.6215 * currweather.main.temp) - (35.75 * Math.pow(currweather.wind.speed, 0.16)) + (0.4275 * currweather.main.temp * Math.pow(currweather.wind.speed, 0.16)))) * 10 / 10}°F`;
    } else {
      f = "N/A";
    }
    document.querySelector('#f').textContent = f;
  });

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecast) => {
 
    const time = forecast.list.filter(time => time.dt_txt.includes('18:00:00'));
    let weekday = 0;
    let temp = 0;
    let icon = 0;
    console.log(time);
    time.forEach((temperature) => {

      let imagesrc = `https://openweathermap.org/img/w/${temperature.weather[0].icon}.png`;
      let imagealt = temperature.weather[0].description;

      document.querySelector(`#day${weekday+1}`).textContent = weekdays[new Date(temperature.dt_txt).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(temperature.main.temp)}°F`;
      document.querySelector(`#icon${icon+1}`).setAttribute('src', imagesrc);
      document.querySelector(`#icon${icon+1}`).setAttribute('alt', imagealt);
      weekday++;
      temp++;
      icon++;
    });
});