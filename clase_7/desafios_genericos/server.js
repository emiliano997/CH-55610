import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido",
  });
});

// Desafio

const frase = ["Frase", "inicial"];

app.get("/api/frase", (req, res) => {
  res.json({
    frase: frase.join(" "),
  });
});

app.get("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;

  res.json({
    buscada: frase[Number(pos) - 1],
  });
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;

  frase.push(palabra);

  res.json({
    palabra,
    posicion: frase.length,
  });
});

app.put("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;

  const { palabra } = req.body;

  const anterior = frase[Number(pos) - 1];

  frase[Number(pos) - 1] = palabra;

  res.json({
    actualizada: palabra,
    anterior,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;

  frase.splice(Number(pos) - 1, 1);

  res.json({
    status: "Eliminado",
  });
});

app.listen(5000, () => console.log("Server listening on port 5000"));
