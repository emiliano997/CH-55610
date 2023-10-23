// function imprimirSaludo() {
//   console.log("Hola");
// return dato
// }

const variableGlobal = 2;

const imprimirSaludo = () => {
  console.log("Hola");
  console.log(variableGlobal);
};

const imprimir = (texto, numero, algomas) => {
  const variableLocal = 25;
  console.log(variableGlobal);
  console.log(variableLocal);
  console.log(texto);
  console.log(numero);
  console.log(algomas);
};

imprimirSaludo();
imprimir("Hola we", 23, "algo mas");

const devolverDato = () => "Dato devuelto";
const esMayoQue = (numero1, numero2) => numero1 > numero2;

let dato = devolverDato();
console.log(dato);
// console.log(devolverDato());
console.log(esMayoQue(5, 1));

console.log(variableGlobal);
console.log(variableLocal);
