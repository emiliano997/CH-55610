const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const operacion = () => console.log("Tarea 2");

console.log("Tarea 1");
temporizador(operacion);

console.log("Tarea 3");
