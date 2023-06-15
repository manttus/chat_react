import mailService from "../../../application/services/mailService";
import {
  customField,
  customParams,
  customQuery,
} from "../../../application/validation/validation";
import { FieldsEnum } from "../../../constants/enums/enums";
import otpController from "../../../controllers/otpController";
import { ExpressType } from "../../../types/express";

const otpRouter = (express: ExpressType) => {
  const router = express.Router();
  const { sendOtp, verifyOtp, authOtp, verifyLink } =
    otpController(mailService);
  router.post("/sendOtp", [customField("email", FieldsEnum.Email)], sendOtp);
  router.post("/authOtp", [customField("email", FieldsEnum.Email)], authOtp);
  router.post(
    "/verifyOtp",
    [
      customField("email", FieldsEnum.Email),
      customField("otp", FieldsEnum.OTP),
    ],
    verifyOtp
  );
  router.get("/verifyLink/:hash", [customParams("hash")], verifyLink);
  return router;
};

export default otpRouter;
