import io from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("http://127.0.0.1:3000/", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log());
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const joinRoom = (username, room) => {
  socket.emit("join", { username, room });
  socket.on("welcome-room", () => console.log());
};

export const sendMessage = ([room, user, message]) => {
  if (socket) socket.emit("send-message", [room, user, message]);
};

export const receiveMessage = (cb) => {
  if (socket)
    socket.on("receive-message", ({ user, message }) => {
      cb(user, message);
    });
};
