import { baseURL } from "../../../constants/baseURL";
import { AppType } from "../../../types/express.types";
import { MongooseType } from "../../../types/mongo.types";

const routes = (app: AppType, mongoose: MongooseType) => {
  app.use(`${baseURL}auth`);
};

export default routes;
