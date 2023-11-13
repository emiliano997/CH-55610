import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Datos (en memoria)
const usuarios = [];

app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido a mi api",
  });
});

// Endpoints usuarios
// Obtener usuarios
app.get("/usuarios", (req, res) => {
  res.json({
    usuarios,
  });
});

// Obtener usuarios por id
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const usuario = usuarios.find((user) => user.id === Number(id));

  if (!usuario) {
    return res.json({
      error: "User does not exists",
    });
  }

  res.json({
    usuario,
  });
});

// Crear usuario
app.post("/usuarios", (req, res) => {
  console.log(req.body);

  const { id, username, name } = req.body;

  // const usuario = {};

  usuarios.push({
    id: Number(id),
    username,
    name,
  });

  res.json({
    status: "Creado",
  });
});

// Actualizar usuario
app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const { username, name } = req.body;

  const index = usuarios.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return res.json({
      error: "User not found",
    });
  }

  usuarios[index] = {
    id: Number(id),
    username,
    name,
  };

  res.json({
    status: "Actualizado",
    usuario: {
      id: Number(id),
      username,
      name,
    },
  });
});

app.listen(5000, () => console.log("Server listening on port 5000"));
