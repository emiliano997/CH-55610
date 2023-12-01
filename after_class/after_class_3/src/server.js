import express from "express";
import postRouter from "./routes/post.routes.js";
import { logger } from "./utils/logger.js";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import { __dirname } from "./dirname.js";
import viewsRouter from "./routes/views.routes.js";
import { ManagerPost, Post } from "./manager/ManagerPost.js";

const app = express();
const PORT = 5000;

const httpServer = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Public
app.use(express.static(`${__dirname}/public`));

app.use(logger);

app.use("/api/posts", postRouter);
app.use("/", viewsRouter);

const manager = new ManagerPost("./data/post.json");

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  socket.on("post_send", async (data) => {
    console.log(data);
    try {
      const post = new Post(
        Number(data.userId),
        Number(data.id),
        data.title,
        data.body
      );
      await manager.savePost(post);
      socket.emit("posts", manager.getPosts());
    } catch (error) {
      console.log(error);
    }
  });

  socket.emit("posts", manager.getPosts());
});
