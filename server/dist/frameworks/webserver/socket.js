"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketConfig = (io) => {
    io.on("connection", (socket) => {
        socket.on("join-room", (roomId) => {
            socket.join(roomId);
            console.log(`${roomId} Joined`);
        });
        socket.on("send-message", (roomId, message, user) => {
            io.to(roomId).emit("new-message", message);
        });
    });
};
exports.default = socketConfig;
