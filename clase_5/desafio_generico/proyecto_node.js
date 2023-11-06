const objeto = {};

for (let i = 0; i < 10000; i++) {
  const numAleatorio = Math.floor(Math.random() * 20) + 1;
  if (objeto[numAleatorio]) {
    objeto[numAleatorio]++;
  } else {
    objeto[numAleatorio] = 1;
  }
}

console.log(objeto);
