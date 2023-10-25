const objeto1 = {
  nombre: "Cynthia",
  edad: 25,
  colorFav: "Azul",
};

const objeto2 = {
  nombre: "Matias",
  edad: 28,
};

// Spread operator
const objeto3 = { ...objeto1, ...objeto2, equipo: "Boca" };

// console.log(objeto3);

const nuevoObjeto = {
  a: "Algo",
  b: "Otro algo",
  c: "Algo más",
};

// Rest operator
const { b, ...losDemas } = nuevoObjeto;

console.log(b);
console.log(losDemas);
console.log(losDemas.a);
