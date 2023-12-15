import express from "express";
import { __dirname } from "./dirname.js";
import handlebars from "express-handlebars";
import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";
import viewsRouter from "./routes/views.routes.js";
import mongoose from "mongoose";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/afterClass")
  .then(() => {
    console.log("Connected DB");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error connecting db");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/", viewsRouter);

app.listen(5000, () => console.log("Server listening on port 5000"));
