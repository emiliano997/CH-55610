const socketClient = io();

socketClient.emit("message", "Mensaje desde el cliente");

socketClient.on("server_message", (data) => {
  console.log(data);
});

socketClient.on("message_all", (data) => {
  console.log(data);
});

socketClient.on("message_all_2", (data) => {
  console.log(data);
});
