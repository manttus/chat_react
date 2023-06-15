import { body, query, param } from "express-validator";
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
    case FieldsEnum.OTP:
      return body(field)
        .notEmpty()
        .withMessage("Fields cannot be empty")
        .trim()
        .isLength({ min: 6, max: 6 })
        .withMessage("Invalid OTP");
    default:
      return body(field).notEmpty().trim();
  }
};

export const customQuery = (fields: string) => {
  return query(fields).notEmpty().withMessage("Parameters cannot be empty");
};

export const customParams = (field: string) => {
  return param(field).notEmpty().withMessage("Parameters cannot be empty");
};
