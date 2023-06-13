import { baseURL } from "./constants/baseURL";
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
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const app = express();
const swagger = YAML.load("./doc.yaml");
app.use(`${baseURL}docs`, swaggerUi.serve, swaggerUi.setup(swagger));

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
