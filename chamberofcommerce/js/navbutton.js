const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {
    if (window.innerWidth > 675) mainnav.classList.remove('responsive')
};

let date = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

document.getElementById("date").textContent = d.toLocaleDateString('en-UK', options);