
// Sección de juegos

// Añade un evento de clic al elemento con ID "tictac"
// Redirecciona a la página "tictac.html" al hacer clic
document.getElementById("tictac").addEventListener("click", () => {
  location.href = "tictac.html";
});

// Añade un evento de clic al elemento con ID "rockpaper"
// Redirecciona a la página "rockpaper.html" al hacer clic
document.getElementById("rockpaper").addEventListener("click", () => {
  location.href = "rockpaper.html";
});

// Añade un evento de clic al elemento con ID "maze"
// Redirecciona a la página "maze.html" al hacer clic
document.getElementById("maze").addEventListener("click", () => {
  location.href = "maze.html";
});

// Comprueba si el ancho de la pantalla es mayor o igual a 1024 píxeles
if (document.body.offsetWidth >= 1024) {
  // Si la condición se cumple, añade un evento de clic al elemento con ID "snakes"
  // Redirecciona a la página "snake.html" al hacer clic
  document.getElementById("snakes").addEventListener("click", () => {
    location.href = "snake.html";
  });
} else {
  // Si la condición no se cumple, muestra un mensaje en la consola
  console.log("snake is not working");
}
