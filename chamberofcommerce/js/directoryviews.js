const listbutton = document.querySelector('.listview');
const gridbutton = document.querySelector('.gridview');
const directorygrid = document.querySelector('.directory');

listbutton.addEventListener('click', (event) => {
  if (!event.target.matches(".listview")) return;
  
  event.preventDefault();
  directorygrid.classList.add("listview");
});

gridbutton.addEventListener('click', (event) => {
  
  event.preventDefault();
  directorygrid.classList.remove("listview");
});