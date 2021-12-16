const date = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
document.getElementById('currentdate');
currentdate.textContent = date.toLocaleDateString('en-GB', options);
document.getElementById('copyrightyear');
copyrightyear.textContent = date.getFullYear();
const lastupdate = document.lastModified;
document.getElementById('lastupdate').textContent = lastupdate; 

const t = parseFloat(document.querySelector('#t').textContent);
const s = parseFloat(document.querySelector('#s').textContent);

let f;
if (t <= 50 && s >= 3) {
    f = `${(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(0)}°F`;
}
else {
    f = "n/a";
}
document.querySelector('#f').textContent = f;