const moment = require("moment");

let fechaActual = moment();
let fechaNacimiento = moment("1997-01-19");

if (fechaNacimiento.isValid()) {
  console.log("Es valido");
  let dias = fechaActual.diff(fechaNacimiento, "days");
  console.log(dias);
}

console.log(fechaNacimiento);
