import express from "express";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.routes.js";
import __dirname from "./utils.js";

// Socket Server
import { Server } from "socket.io";

const app = express();
const PORT = 5000;
const httpServer = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

// Instanciar Websocket
const socketServer = new Server(httpServer);

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

const users = [];

// Socket communication
socketServer.on("connection", (socketClient) => {
  console.log("Nuevo cliente conectado");

  socketClient.on("message", (data) => {
    console.log(data);
  });

  socketClient.emit("server_message", "Mensaje desde el servidor");

  // Mensaje para todos, menos para el que hace la conexion
  socketClient.broadcast.emit("message_all", `${socketClient.id} Conectado`);

  // Mensaje para todos
  socketServer.emit("message_all_2", "Mensaje a todos");

  // Mensajes del form
  socketClient.on("form_message", (data) => {
    console.log(data);
    users.push(data);
    socketClient.emit("users_list", users);
  });

  socketClient.emit("users_list", users);
});
