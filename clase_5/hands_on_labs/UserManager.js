const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  constructor(path) {
    try {
      this.path = path;
      let users = fs.readFileSync(path, "utf-8");
      this.users = JSON.parse(users);
    } catch {
      this.users = [];
    }
  }

  async crearUsuario(user) {
    const hashPassword = crypto
      .createHash("sha256")
      .update(user.password)
      .digest("hex");

    user.password = hashPassword;

    this.users.push(user);

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.users, null, "\t")
      );
      console.log("User created");
    } catch (error) {
      console.log("Error creating user: " + error);
    }
  }

  validarUsuario(username, password) {
    const userExists = this.users.find((user) => user.username === username);

    if (!userExists) {
      console.log("User does not exists");
      return;
    }

    const hashPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    console.log("User password: " + userExists.password);
    console.log("New pasword: " + hashPassword);

    if (userExists.password === hashPassword) {
      console.log("Logged!");
    } else {
      console.log("Invalid Password");
    }
  }
}

class User {
  constructor(nombre, apellido, username, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.password = password;
  }
}

const user = new UserManager("./Users.json");
// user.crearUsuario(new User("emi", "perez", "emiperez", "123"));
// user.crearUsuario(new User("yessi", "perez", "yessiperez", "1234"));
// user.crearUsuario(new User("facu", "perez", "facuperez", "pauli"));
// user.crearUsuario(new User("paula", "perez", "pauperez", "facu123"));

user.validarUsuario("emiperez", "123");
// user.validarUsuario("pauperez", "facu123");
// user.validarUsuario("yessiperez", "123");
// user.validarUsuario("yessuperez", "123");
