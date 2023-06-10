"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT;
const socket = process.env.SOCKET;
exports.config = {
    port: port || 3000,
    mongo: {
        uri: mongo_url || "mongodb://localhost:27017",
        strictMode: true,
    },
    socket: socket || 3001,
};
