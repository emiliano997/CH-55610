// const llamadaAApi = async () => {}

async function llamadaAApi() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respuesta.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

llamadaAApi();
