const objeto = {
  nombre: "Alberto",
  edad: 25,
  colorFav: "Azul",
};

const numeros = [2, 232, 342, 233, 32];

const total = numeros.reduce(
  (valorPrevio, valorAcumulado) => valorPrevio + valorAcumulado
);
console.log(total);

console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));
