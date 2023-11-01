const fs = require("fs");

const operacion = async (fileName, objeto) => {
  try {
    await fs.promises.writeFile(fileName, JSON.stringify(objeto, null, "\t"));

    let contenido = await fs.promises.readFile(fileName, "utf-8");
    let data = JSON.parse(contenido);
    console.log(contenido);
    console.log(data.id);
    console.log(typeof contenido);

    let array = [data, { id: 2, name: "Arturo", age: 25 }];

    await fs.promises.writeFile(fileName, JSON.stringify(array, null, "\t"));
  } catch (error) {
    console.log(error);
    console.log("Hubo un error");
  }
};

operacion("./texto.json", {
  id: 1,
  name: "Roberto",
  age: 24,
});
