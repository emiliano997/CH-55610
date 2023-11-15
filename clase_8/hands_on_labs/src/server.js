import express from "express";
import petRouter from "./routes/pets.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ejemplos middlewares
// function logger(req, res, next) {
//   console.log("Servidor recibe peticion");
//   next();
// }

// app.use(logger);

// function middleware(req, res, next) {
//   const { code, productName } = req.body;

//   if (!code || code === "") {
//     return res.json({
//       error: "Esta el campo code vacio",
//     });
//   }
// }

// Ruta main
app.get("/", middleware, (req, res) => {
  res.json({
    mensaje: "Bienvenido",
  });
});

// Routes
app.use("/api/pets", petRouter);
app.use("/api/users", usersRouter);

app.listen(5000, () => console.log("Server listening on port 5000"));
