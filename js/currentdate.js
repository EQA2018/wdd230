const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
//console.log(d);
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
//console.log(d.getDay());
const year = d.getFullYear();
//console.log(d.getFullYear());
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()}, ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;
//const fullyear = `${year}`;
document.getElementById("copyrightyear").textContent = year;

//const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// ****************************