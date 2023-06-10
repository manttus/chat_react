"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL_1 = require("../../../constants/baseURL");
const routes = (app, mongoose) => {
    app.use(`${baseURL_1.baseURL}auth`);
};
exports.default = routes;
