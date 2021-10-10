/*const hambutton = document.querySelector(".hamburger");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.querySelector(".copyrightyear").textContent = new Date().getFullYear();

const date = new Date(Date.now());

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.querySelector("#date").textContent = date.toLocaleDateString('en-UK', options);*/

let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

document.getElementById("date").textContent = d.toLocaleDateString('en-UK', options);

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}