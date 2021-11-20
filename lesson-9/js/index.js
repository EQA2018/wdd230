
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {return response.json();}).then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {
    
            let towncontainer = document.createElement('div');
            towncontainer.classList.add('town-container');
            let town = document.createElement('section');
            town.classList.add('town-data');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let n = document.createElement('n');
            let paragraphs = document.createElement('section');
            paragraphs.classList.add('paragraph-block');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let imagesection = document.createElement('section');
            imagesection.classList.add('town-img');
            let img = document.createElement('img');

            if (towns[i].name === "Preston") {
                a.setAttribute('href', "preston-6.html");
            } else if (towns[i].name === "Fish Haven") {
                a.setAttribute('href', "#");
            } else if (towns[i].name === "Soda Springs") {
                a.setAttribute('href', "#");
            } else {
                a.setAttribute('href', "#");
            }

            a.textContent = towns[i].name;
            n.textContent = towns[i].motto;
            p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p2.textContent = 'Population: ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            img.setAttribute('src', 'images/' + towns[i].photo);
            img.setAttribute('alt', towns[i].name);

            h2.appendChild(a);
            town.appendChild(h2);
            town.appendChild(n);
            paragraphs.appendChild(p1);
            paragraphs.appendChild(p2);
            paragraphs.appendChild(p3);
            town.appendChild(paragraphs);
            imagesection.appendChild(img);
            towncontainer.appendChild(town);
            towncontainer.appendChild(imagesection);

            document.querySelector('div.home-grid').appendChild(towncontainer);
        }
    }
});
let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

document.getElementById("date").textContent = d.toLocaleDateString('en-UK', options);

const today = d.getDate();

const lastVisit = localStorage.getItem('lastVisit') || today;
const millisecondsToDay = 86400000;

if (lastVisit == today) {
    document.querySelector('#gallery-visits').textContent = 'Last Visit: Today is your first visit!!';
}
else {
    displayDate = (lastVisit - today / millisecondsToDay).toFixed(0);
    document.querySelector('#gallery-visits').textContent = 'Last Visit: ${displayDate}';
}
localStorage.setItem('lastVisit', today);

function toggleRating(rating) {
    document.getElementById("value").innerHTML = rating;
}
function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#storm-region');
    s.style.display = "block";
    s.textContent = sel.value;
}