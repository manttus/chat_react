import { body } from "express-validator";
import { FieldsEnum } from "../../constants/enums/enums";

export const customField = (field: string, type: string) => {
  switch (type) {
    case FieldsEnum.Email:
      return body(field)
        .notEmpty()
        .withMessage("Field cannot be empty")
        .trim()
        .isEmail()
        .withMessage("Invalid email")
        .normalizeEmail();
    case FieldsEnum.Password:
      return body(field)
        .notEmpty()
        .withMessage("Field cannot be empty")
        .trim()
        .isLength({ min: 8, max: 15 })
        .withMessage("Invalid password");
    case FieldsEnum.Nullable:
      return body(field).optional().trim();
    default:
      return body(field).notEmpty().trim();
  }
};
