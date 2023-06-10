import { Socket } from "socket.io";

const socketConfig = (io: any) => {
  io.on("connection", (socket: Socket) => {
    socket.on("join-room", (roomId: string) => {
      socket.join(roomId);
      console.log(`${roomId} Joined`);
    });
    socket.on(
      "send-message",
      (roomId: string, message: string, user: string) => {
        io.to(roomId).emit("new-message", message);
      }
    );
  });
};

export default socketConfig;
