const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.method === "GET" && request.url === "/") {
    response.end("Mi primer servidor con node en Coderhouse!!!!");
  }

  if (request.url !== "/") {
    response.end("Error página no encontrada");
  }
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
