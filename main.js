

const menuButton = document.getElementById('menuButton');
const listaMenu = document.getElementById('listaMenu');

menuButton.addEventListener('click', () => {
    if (listaMenu.style.display === "none") {
        listaMenu.style.display = "flex";
    } else {
        listaMenu.style.display = "none";
    }
});