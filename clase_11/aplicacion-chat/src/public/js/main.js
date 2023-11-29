const socket = io();

const chatbox = document.querySelector("#chatbox");
let user;

Swal.fire({
  title: "Bienvenido",
  text: "Ingrese su nombre para continuar",
  input: "text",
  inputValidator: (value) => {
    return !value && "Necesitás identificarte";
  },
  allowOutsideClick: false,
}).then((value) => {
  user = value.value;
});

chatbox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    socket.emit("message", {
      user,
      message: e.target.value,
    });
    chatbox.value = "";
  }
});

socket.on("messages", (data) => {
  const log = document.querySelector("#messages");
  let messages = "";

  data.forEach((message) => {
    messages += `<strong>${message.user}</strong>: ${message.message} <br />`;
  });

  log.innerHTML = messages;

  console.log(data);
});
