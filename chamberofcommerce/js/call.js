const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=112.8544&lon=42.7860&units=imperial&exclude=minutely,hourly&appid=97d75aaa7ad1a3a956b14c369172fdaf";
const date = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


fetch(weatherdata)
  .then((response) => response.json())  
  .then((weatherdata) => {
    console.log(weatherdata);
    document.querySelector('.t').textContent = Math.round(weatherdata.current.temp * 10) / 10;
    document.querySelector('.humidity').textContent = `${weatherdata.current.humidity}%`;
    document.querySelector('.cloudiness').textContent = weatherdata.current.weather[0].description;
    let weekday = 0;
    let temp = 0;
    for (i=0; i < weatherdata.daily.length-5; i++) {
      document.querySelector(`#day${weekday+1}`).textContent = d[new Date(weatherdata.daily[i].dt*1000).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(weatherdata.daily[i].temp.day)}°F`;
      weekday++
      temp++
    };
    
    if (weatherdata.alerts.length > 0) {
      
      const alertdiv = document.createElement('div');
      alertdiv.setAttribute('class', "alertcontainer");
      const exitbutton = document.createElement('button');
      exitbutton.textContent = '❌';

      alertdiv.appendChild(exitbutton);
      exitbutton.addEventListener('click', () => {
        document.querySelector('#weatheralert').style.display = 'none';
      });

      for (i = 0; i < weatherdata.alerts.length; i++) {
        let alertheading = document.createElement('p');
        let alertpara = document.createElement('p');
                
        alertheading.setAttribute('class', "alertheading");
        alertpara.setAttribute('class', "alertpara");
        alertheading.textContent = `${weatherdata.alerts[i].event}`;
        alertpara.innerHTML = `${weatherdata.alerts[i].description}`.replace(/(\n)+/g, '<br />');
                
        alertdiv.appendChild(alertheading);
        alertdiv.appendChild(alertpara);        
        document.querySelector('#weatheralert').appendChild(alertdiv);        
      }
      document.querySelector('#weatheralert').style.display = 'block';      
    }
  });  