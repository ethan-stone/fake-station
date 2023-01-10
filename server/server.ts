import { Server, type WebSocket } from "ws";

const server = new Server({
  port: 8080,
});

let sockets: WebSocket[] = [];

server.on("connection", (socket) => {
  sockets.push(socket);

  console.debug(`socket connected`);

  socket.on("message", (msg) => {
    console.debug(`Message received: ${msg}`);
    // echo back message

    socket.send(msg);
  });

  socket.on("close", () => {
    console.debug(`socket closed`);
    sockets = sockets.filter((s) => s !== socket);
  });
});
