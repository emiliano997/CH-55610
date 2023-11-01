const fs = require("fs");

class ManagerUsuarios {
  constructor(fileName) {
    this.fileName = fileName;
    if (fs.existsSync(fileName)) {
      try {
        let usuarios = fs.readFileSync(fileName, "utf-8");
        this.usuarios = JSON.parse(usuarios);
      } catch (error) {
        this.usuarios = [];
      }
    } else {
      this.usuarios = [];
    }
  }

  async saveFile(data) {
    try {
      await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(data, null, "\t")
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addUsuario(usuario) {
    this.usuarios.push(usuario);

    const respuesta = await this.saveFile(this.usuarios);

    if (respuesta) {
      console.log("Usuario creado");
    } else {
      console.log("Hubo un error al crear un usuario");
    }
  }

  consultarUsuarios() {
    console.log(this.usuarios);
    return this.usuarios;
  }
}

class Usuario {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
  }
}

// Pruebas
const usuario1 = new Usuario("Mariano", "Lopez", 26, "Backend");
const usuario2 = new Usuario("Felipe", "Lopez", 36, "Backend");
const usuario3 = new Usuario("Arturo", "Feliz", 26, "Frontend");

const manager = new ManagerUsuarios("./Usuarios.json");

// console.log(manager.consultarUsuarios());
manager.addUsuario(usuario1);
console.log(manager.consultarUsuarios());

manager.addUsuario(usuario2);
manager.addUsuario(usuario3);
console.log(manager.consultarUsuarios());
