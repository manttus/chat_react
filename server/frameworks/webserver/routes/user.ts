import {
  customField,
  customParams,
} from "../../../application/validation/validation";
import { FieldsEnum } from "../../../constants/enums/enums";
import userController from "../../../controllers/userController";
import { ExpressType } from "../../../types/express";
import authorization from "../middlewares/authorization";

const userRouter = (express: ExpressType) => {
  const router = express.Router();
  const { profileUser, updateUser, deleteUser } = userController();
  router.get("/profile", authorization, profileUser);
  router.put(
    "/update/:id",
    [
      customParams("hash"),
      customField("username", FieldsEnum.Others),
      customField("image", FieldsEnum.Others),
    ],
    updateUser
  );
  router.delete("/update/:id", [customParams("hash")], deleteUser);
  return router;
};

export default userRouter;
