const botonMenu = document.getElementById('botonMenu');
const enlacesMenu = document.getElementById('enlacesMenu');
const anio = document.getElementById('anio');

botonMenu.addEventListener('click', () => {
    enlacesMenu.classList.toggle('mostrar');
});

document.querySelectorAll('.enlaces a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        enlacesMenu.classList.remove('mostrar');
    });
});

anio.textContent = new Date().getFullYear();
