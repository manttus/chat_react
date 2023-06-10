import { config } from "../../../config/config";
import { MongooseType } from "../../../types/mongo.types";

const connection = (mongoose: MongooseType) => {
  const connectToMongo = () => {
    mongoose.set("strictQuery", config.mongo.strictMode);
    mongoose
      .connect(config.mongo.uri)
      .then(
        () => {
          console.log({ message: "Connected to Database" });
        },
        (err: Error) => {
          console.info("Mongodb error", err);
        }
      )
      .catch((err: Error) => {
        console.log("ERROR: ", err);
      });
  };
  return {
    connectToMongo,
  };
};

export default connection;
