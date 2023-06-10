"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressConfig = (app, json, cors) => {
    app.use(json());
    app.use(cors());
    app.use((_, res, next) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-type, Authorization, Cache-control, Pragma");
        next();
    });
};
exports.default = expressConfig;
