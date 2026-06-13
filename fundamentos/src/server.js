import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Servidor no ar");
});

server.listen(3333);
