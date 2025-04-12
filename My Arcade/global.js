// Configuración global de elementos y variables

// Selecciona el elemento con ID "overlay" para el menú desplegable
const overlay = document.getElementById("overlay");

// Selecciona el botón de cerrar menú con ID "closebtn"
const closebtn = document.getElementById("closebtn");

// Selecciona el contenedor de la lista de opciones en el menú desplegable con ID "overlay-list"
const overlist = document.getElementById("overlay-list");

// Selecciona el botón de apertura de menú con ID "openbtn"
const openbtn = document.getElementById("openbtn");

// Selecciona todos los elementos de enlace en la página
const tags = document.querySelectorAll("a");

// FUNCIÓN DEL MENÚ DESPLEGABLE (DROP-DOWN MENU)

// Evento para cerrar el menú desplegable
closebtn.addEventListener("click", () => {
  // Ajusta la altura del contenedor "overlay" a 0, ocultándolo
  overlay.style.height = "0px";
  // Oculta el botón de cerrar menú
  closebtn.style.display = "none";
  // Oculta la lista de opciones del menú
  overlist.style.display = "none";
});

// Evento para abrir el menú desplegable
openbtn.addEventListener("click", () => {
  // Ajusta la altura del contenedor "overlay" a 200 píxeles para pantallas pequeñas
  overlay.style.height = "200px";
  
  // Ajusta la altura del contenedor según el ancho de la pantalla
  if (overlay.clientWidth >= 768) {
    // Si el ancho de la pantalla es mayor o igual a 768 píxeles, ajusta la altura a 300 píxeles
    overlay.style.height = "300px";
  } else if (overlay.clientWidth >= 360) {
    // Si el ancho de la pantalla es mayor o igual a 360 píxeles, ajusta la altura a 200 píxeles
    overlay.style.height = "200px";
  }

  // Después de 300 milisegundos, muestra el botón de cerrar menú y la lista de opciones
  setTimeout(() => {
    closebtn.style.display = "inline";
    overlist.style.display = "block";
  }, 300);
});

// FUNCIÓN DE NAVEGACIÓN AL HACER CLIC EN EL LOGOTIPO DE LA MARCA

// Selecciona el elemento con ID "branding"
branding = document.getElementById("branding");

// Evento para redirigir a la página principal al hacer clic en el logotipo
branding.addEventListener("click", () => {
  // Redirige a "home.html"
  location.href = "home.html";
});
