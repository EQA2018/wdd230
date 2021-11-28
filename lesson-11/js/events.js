let currenttown ='';

if (window.location.href === 'https://eqa2018.github.io/wdd230/lesson-11/sodasprings.html') { //'http://127.0.0.1:5500/lesson-11/sodasprings.html'
  currenttown = 'Soda Springs';
}

else if (window.location.href === 'https://eqa2018.github.io/wdd230/lesson-11/preston.html') { //'http://127.0.0.1:5500/lesson-11/preston.html'
  currenttown = 'Preston';
}

else {
  currenttown = 'Fish Haven';
}

fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
    townname.forEach((town) => {
      //console.log(townname);
      if (town.name === currenttown) {
        for (i=0; i < town.events.length; i++) {
          let para = document.createElement('p');
          para.textContent = `${town.events[i]}`;
          document.querySelector('#events').appendChild(para);
        };
      };
    });
  });