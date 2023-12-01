import express from "express";
import postRouter from "./routes/post.routes.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido",
  });
});

app.use(logger);

app.use("/api/posts", postRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
