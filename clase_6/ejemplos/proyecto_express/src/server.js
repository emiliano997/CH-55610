// const express = require("express");
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1> Hola mundo desde express </h1>");
});

app.listen(8080, () => console.log("Server listening on port 8080"));
