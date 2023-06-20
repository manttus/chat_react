import authController from "../../../controllers/authController";
import { ExpressType } from "../../../types/express";
import { customField, customParams } from "../../../application/validation/validation";
import { FieldsEnum } from "../../../constants/enums/enums";
import searchController from "../../../controllers/searchController";

const searchRouter = (express: ExpressType) => {
  const router = express.Router();
  const { getSearchUser, getPreviousUser } = searchController();
  router.get(
    "/:text",
    [
      customParams("text"),
    ],
    getSearchUser
  );
  router.get(
    "/previous/:text",
    [
      customField("email", FieldsEnum.Email),
      customField("password", FieldsEnum.Password),
      customField("username", FieldsEnum.Others),
    ],
    getPreviousUser
  );
  return router;
};

export default searchRouter;
