import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";

import viewsRoutes from "./routes/views.routes.js";
import mongoose from "mongoose";

import productRoutes from "./routes/product.routes.js";

// Esto sirve para recorrer arrays en handlebars
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

const app = express();

// Mongo Local
// mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/coderhouse")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Configuración de Handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);

// Configuracion de Express
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", viewsRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, console.log("Server running on port 3000"));
