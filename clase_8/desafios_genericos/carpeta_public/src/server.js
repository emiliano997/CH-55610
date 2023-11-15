import express from "express";
import petRouter from "./routes/pets.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Routes
app.use("/api/pets", petRouter);
app.use("/api/users", usersRouter);

app.listen(5000, () => console.log("Server listening on port 5000"));
