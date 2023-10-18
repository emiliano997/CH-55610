// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. Compartir la definición en el Visual Studio Code.

let nombre = "María Paula";

let series = ["game of thrones", "outlander", "Anne"];

let peliculas = ["Terminator", "Forest Gump", "Volver al Futuro"];

let edad = 39;

console.log(nombre + " | " + edad + " | " + series + " | " + peliculas);

series.push("friends");
peliculas.push("Mad Max");
edad++;

console.log("Datos modificados");
console.log(nombre + " | " + edad + " | " + series + " | " + peliculas);
