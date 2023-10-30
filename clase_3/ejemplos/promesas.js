function dividir(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) {
      reject("No se puede dividir por 0");
    } else {
      resolve(numero1 / numero2);
    }
  });
}

let respuesta = dividir(3, 0)
  .then((resultado) => {
    console.log("Salió todo bien");
    console.log(resultado);
  })
  .catch((error) => {
    console.log("Hubo un error");
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Terminó la ejecución");
  });

console.log(respuesta);
