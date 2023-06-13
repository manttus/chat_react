import authController from "../../../controllers/authController";
import { ExpressType } from "../../../types/express";
import authService from "../../../application/services/authService";
import { customField } from "../../../application/validation/validation";
import { FieldsEnum } from "../../../constants/enums/enums";

const authRouter = (express: ExpressType) => {
  const router = express.Router();
  const { login, register, token } = authController(authService);
  router.post(
    "/login",
    [
      customField("email", FieldsEnum.Email),
      customField("password", FieldsEnum.Password),
    ],
    login
  );
  router.post(
    "/register",
    [
      customField("email", FieldsEnum.Email),
      customField("password", FieldsEnum.Password),
      customField("username", FieldsEnum.Others),
    ],
    register
  );
  router.post("/token", [customField("token", FieldsEnum.Others)], token);
  return router;
};

export default authRouter;
