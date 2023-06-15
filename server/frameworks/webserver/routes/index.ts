import { baseURL } from "../../../constants/baseURL";
import { AppType, ExpressType } from "../../../types/express";
import authRouter from "./auth";
import otpRouter from "./otp";
import userRouter from "./user";

const routes = (app: AppType, express: ExpressType) => {
  app.use(`${baseURL}auth`, authRouter(express));
  app.use(`${baseURL}otp`, otpRouter(express));
  app.use(`${baseURL}user`, userRouter(express));
};

export default routes;
