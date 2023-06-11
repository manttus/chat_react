"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL_1 = require("../../../constants/baseURL");
const auth_1 = __importDefault(require("./auth"));
const routes = (app, express) => {
    app.use(`${baseURL_1.baseURL}auth`, (0, auth_1.default)(express));
};
exports.default = routes;
