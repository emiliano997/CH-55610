const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

function calcular(numero1, numero2, callback) {
  return callback(numero1, numero2);
}

console.log(calcular(2, 3, sumar));
console.log(calcular(2, 3, restar));
console.log(calcular(2, 3, multiplicar));
console.log(calcular(2, 3, dividir));

setTimeout(() => {
  console.log("Hola");
  setTimeout(() => {
    console.log("Chau");
    setTimeout(() => {
      console.log("Hola");
      setTimeout(() => {
        console.log("Chau");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
