// const express = require("express");
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1> Hola mundo desde express </h1>");
});

// Desafio de clase
app.get("/bienvenida", (request, response) => {
  response.send("<h1 style='color: blue'>Bienvenido wey </h1>");
});

app.get("/usuario", (request, response) => {
  response.json({
    nombre: "Emiliano",
    apellido: "Perez",
    edad: 26,
    correo: "emi@gmail.com",
  });
});

app.listen(8080, () => console.log("Server listening on port 8080"));
