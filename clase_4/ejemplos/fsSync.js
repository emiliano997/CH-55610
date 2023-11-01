const fs = require("fs");

fs.writeFileSync("./text.txt", "Escribiendo en un archivo nuevo \nOtro texto");

console.log(fs.existsSync("./setInterval.js"));

if (fs.existsSync("./text.txt")) {
  console.log("El archivo existe");

  let contenido = fs.readFileSync("./text.txt", "utf-8");
  console.log(contenido);

  fs.appendFileSync("./text.txt", "\nContenido añadido");

  contenido = fs.readFileSync("./text.txt", "utf-8");
  console.log(contenido);

  fs.unlinkSync("./text.txt");
}
