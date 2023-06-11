import { baseURL } from "../../../constants/baseURL";
import { AppType, ExpressType } from "../../../types/express.types";
import authRouter from "./auth";

const routes = (app: AppType, express: ExpressType) => {
  app.use(`${baseURL}auth`, authRouter(express));
};

export default routes;
