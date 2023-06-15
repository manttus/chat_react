const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT;
const user = process.env.APP_EMAIL;
const pass = process.env.APP_KEY;
const socket = process.env.SOCKET;
const secret = process.env.SECRET;
const refresh = process.env.REFRESH;

export const config = {
  port: port || 3000,
  mongo: {
    uri: mongo_url || "mongodb://localhost:27017",
    strictMode: true,
  },
  socket: socket || 3001,
  secret: secret || "GGG",
  refresh: refresh || "FFF",
  mailConfig: {
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  },
};
