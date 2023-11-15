import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));
app.use("/static", express.static("public"));

app.listen(5000, () => console.log("Server listening on port 5000"));
