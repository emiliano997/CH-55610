const fs = require("fs");

// const fecha = new Date().toLocaleString();
// console.log(fecha);

fs.writeFile("./texto_callback.txt", "Escribiendo en un callback", (error) => {
  if (error) {
    return console.log("Hubo un error al escribir el archivo");
  }

  fs.readFile("./texto_callback.txt", "utf-8", (error, contenido) => {
    if (error) {
      return console.log("Hubo un error al leer el archivo");
    }

    console.log(contenido);

    fs.appendFile(
      "./texto_callback.txt",
      "\nTexto recién salido del horno",
      (error) => {
        if (error) {
          return console.log("Hubo un error al agregar contenido al archivo");
        }

        fs.readFile("./texto_callback.txt", "utf-8", (error, contenido) => {
          if (error) {
            return console.log("Hubo un error al leer el archivo");
          }

          console.log(contenido);

          fs.unlink("./texto_callback.txt", (error) => {
            if (error) {
              return console.log("Hubo un error al eliminar el archivo");
            }
          });
        });
      }
    );
  });
});
