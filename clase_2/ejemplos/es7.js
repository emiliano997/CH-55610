const numeros = [2, 3, 4, 5, 6];
console.log(numeros);

// Exponencial → **
const numerosNuevos = numeros.map((numero) => numero ** 3);
console.log(numerosNuevos);

// Includes
const nombres = ["Matias", "Cinthya", "Maria", "Enzo"];

const nombre = "Norberto";

if (nombres.includes(nombre)) {
  console.log(`${nombre} está presente`);
} else {
  console.log(`${nombre} no está presente`);
}
