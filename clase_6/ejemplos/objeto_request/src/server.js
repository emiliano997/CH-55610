import express from "express";

const app = express();
const PORT = 5000;

const usuarios = [
  {
    id: 1,
    nombre: "Emiliano",
    edad: 26,
  },
  {
    id: 2,
    nombre: "Roberto",
    edad: 35,
  },
  {
    id: 3,
    nombre: "Mauro",
    edad: 21,
  },
];

// req → request
// res → response
app.get("/", (req, res) => {
  // Ejemplo URL: http://localhost:5000/?nombre=Emiliano
  console.log(req.query.nombre); // ?key=valor

  const { nombre, edad, ciudad } = req.query;
  console.log(nombre, edad, ciudad);

  if (nombre) {
    const usuario = usuarios.find((user) => user.nombre === nombre);
    if (usuario) {
      return res.send(`Bienvenido ${usuario.nombre}!`);
    } else {
      return res.send("Bienvenido invitado!");
    }
  }

  res.send("Bienvenido invitado!");

  // res.send("Saludo desde el servidor");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
