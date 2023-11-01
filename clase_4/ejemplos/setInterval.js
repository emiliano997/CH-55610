const contador = () => {
  let contador = 1;
  console.log("Iniciando contador");
  let timer = setInterval(() => {
    console.log("Contador: ", contador);
    contador++;
    if (contador > 5) {
      clearInterval(timer);
    }
  }, 1000);
};

console.log("Tarea 1");
contador();
console.log("Tarea 3");
