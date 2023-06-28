const menuButton = document.getElementById("menuButton");
const listaMenu = document.getElementById("listaMenu");

menuButton.addEventListener("click", () => {
  listaMenu.classList.toggle("hidden");
});

const modal = document.getElementById("myModal");

const btn = document.getElementById("buttonIngresar");
const btnSm = document.getElementById("buttonIngresarSm");

const cruz = document.getElementById("cruz");

cruz.addEventListener("click", () => (modal.style.display = "none"));


cruz.addEventListener('click', () => modal.style.display = "none")

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


btn.addEventListener('click', ()=> {
   if (modal.style.display = 'none') {
      modal.style.display = 'flex';
      
   } 
})
btnSm.addEventListener('click', ()=> {
   if (modal.style.display = 'none') {
      modal.style.display = 'flex';
      
   } 
})

