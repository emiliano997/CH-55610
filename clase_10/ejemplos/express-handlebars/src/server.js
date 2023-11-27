import express from "express";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.routes.js";
import __dirname from "./utils.js";

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/", viewRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
