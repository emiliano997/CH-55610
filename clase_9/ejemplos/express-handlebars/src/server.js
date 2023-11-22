import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();
const PORT = 5000;

// Configuramos el engine
app.engine(
  "hbs",
  handlebars.engine({
    // index.hbs
    extname: "hbs",
    // Plantilla principal
    defaultLayout: "main",
  })
);

// Seteamos nuestro motor
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Public
app.use(express.static(`${__dirname}/public`));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Titulo nuevo nuevo",
    nombre: "Eric",
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
