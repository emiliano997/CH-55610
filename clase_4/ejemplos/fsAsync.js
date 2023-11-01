const fs = require("fs");

const operaciones = async (fileName) => {
  try {
    await fs.promises.writeFile(
      fileName,
      "Escribiendo en un archivo con promesas"
    );

    let contenido = await fs.promises.readFile(fileName, "utf-8");
    console.log(contenido);

    await fs.promises.appendFile(fileName, "\nAgregando contenido");

    contenido = await fs.promises.readFile(fileName, "utf-8");
    console.log(contenido);

    // await fs.promises.unlink(fileName);
  } catch (error) {
    console.log("Hubo un error");
  }
};

operaciones("./texto.txt");
