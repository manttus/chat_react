"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config/config");
const connection = (mongoose) => {
    const connectToMongo = () => {
        mongoose.set("strictQuery", config_1.config.mongo.strictMode);
        mongoose
            .connect(config_1.config.mongo.uri)
            .then(() => {
            console.log({ message: "Connected to Database" });
        }, (err) => {
            console.info("Mongodb error", err);
        })
            .catch((err) => {
            console.log("ERROR: ", err);
        });
    };
    return {
        connectToMongo,
    };
};
exports.default = connection;
