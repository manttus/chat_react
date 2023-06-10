const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT;
const socket = process.env.SOCKET;

export const config = {
  port: port || 3000,
  mongo: {
    uri: mongo_url || "mongodb://localhost:27017",
    strictMode: true,
  },
  socket: socket || 3001,
};
