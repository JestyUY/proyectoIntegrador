

const menuButton = document.getElementById('menuButton');
const listaMenu = document.getElementById('listaMenu');

menuButton.addEventListener('click', () => {
   listaMenu.classList.toggle('hidden')
   
});

// Obtén el modal
const modal = document.getElementById("myModal");

// Obtén el botón que abre el modal
const btn = document.getElementById("buttonIngresar");
const btnSm = document.getElementById("buttonIngresarSm");

// Obtén el elemento <span> que cierra el modal
const span = document.getElementsByClassName("close");
const cruz = document.getElementById('cruz')

// Función para abrir el modal
// function openModal() {
//     modal.style.display = "flex";
// }

// Función para cerrar el modal
// function closeModal() {
//     modal.style.display = "none";
// }
cruz.addEventListener('click', () => modal.style.display = "none")
// Cierra el modal cuando se hace clic fuera de él
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

btn.addEventListener('click', ()=> {
   if (modal.style.display = 'none') {
      modal.style.display = 'flex'
   } 
})
btnSm.addEventListener('click', ()=> {
   if (modal.style.display = 'none') {
      modal.style.display = 'flex'
   } 
})
// btnSm.addEventListener('click', ()=> {
//    modal.classList.toggle('flex')
// })