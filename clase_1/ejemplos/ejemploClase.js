class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static especie = "Humano";

  hablar(texto) {
    console.log(`${this.nombre}: ${texto}`);
  }

  cambiarEspecie(especieNueva) {
    Persona.especie = especieNueva;
  }

  datos() {
    console.log(`${this.nombre} - ${this.edad}`);
  }
}

// Instancias
const lautaro = new Persona("Lautaro", 23);
const matias = new Persona("Matias", 32);

lautaro.datos();
matias.datos();

console.log(Persona.especie);
lautaro.cambiarEspecie("Asgardiano");

console.log(Persona.especie);
