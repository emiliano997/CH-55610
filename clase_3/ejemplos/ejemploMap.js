// const numeros = [1, 2, 3, 4, 5, 6];

// function cuadrado(numero, index) {
//   console.log(index);
//   return numero ** 2;
// }

// const numerosNuevos = numeros.map(cuadrado);

// const numeros2 = [1, 2, 3, 4, 5, 6];

// const numerosNuevos2 = numeros.map((numero) => numero ** 2);

// console.log(numerosNuevos);
// console.log(numerosNuevos2);

function mapCustom(array, callback) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    let nuevoValor = callback(array[i]);
    nuevoArray.push(nuevoValor);
  }

  return nuevoArray;
}

const numeros = [2, 3, 4, 5, 6];

const nuevoArr = mapCustom(numeros, (valor) => {
  return valor * 2;
});

console.log(nuevoArr);

// Extra
Array.prototype.mapCustom = function (callback) {
  let nuevoArray = [];

  for (let i = 0; i < this.length; i++) {
    let nuevoValor = callback(this[i]);
    nuevoArray.push(nuevoValor);
  }

  return nuevoArray;
};

numeros.mapCustom((valor) => {
  console.log(valor);
  return valor * 2;
});
