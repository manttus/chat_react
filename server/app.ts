import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import connection from "./frameworks/database/mongoDB/connection";
import expressConfig from "./frameworks/webserver/express";
import serverConfig from "./frameworks/webserver/server";
import socketConfig from "./frameworks/webserver/socket";
import routes from "./frameworks/webserver/routes";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
connection(mongoose).connectToMongo();
expressConfig(app, json, cors);
socketConfig(io);
routes(app, express);
const serverConf = serverConfig(app, server);
serverConf.startServer();
serverConf.startSocketServer();
