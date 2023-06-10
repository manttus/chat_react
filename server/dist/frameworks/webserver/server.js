"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/config");
const serverConfig = (app, server) => {
    const startServer = () => {
        app.listen(config_1.config.port, () => {
            console.log({ message: `Server started in port ${config_1.config.port}` });
        });
    };
    const startSocketServer = () => {
        server.listen(config_1.config.socket, () => {
            console.log({
                message: `Socket server started in port ${config_1.config.socket}`,
            });
        });
    };
    return {
        startServer,
        startSocketServer,
    };
};
exports.default = serverConfig;
