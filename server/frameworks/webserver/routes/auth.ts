import mongoose from "mongoose";
import authController from "../../../controllers/authController";
import { ExpressType } from "../../../types/express.types";
import { authService } from "../../../application/services/authService";
import { customField } from "../../../application/validation/validation";
import { FieldsEnum } from "../../../constants/enums/enums";

const authRouter = (express: ExpressType) => {
  const router = express.Router();
  const { login, register, token } = authController(mongoose, authService);
  router.post(
    "/login",
    [
      customField("email", FieldsEnum.Email),
      customField("password", FieldsEnum.Password),
    ],
    login
  );
  router.post("/register", register);
  router.post("/token", token);
  return router;
};

export default authRouter;
