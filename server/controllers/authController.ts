import { MongooseType } from "../types/mongo.types";
import { RequestType, ResponseType, NextType } from "../types/express.types";
import { validationResult } from "express-validator";

const authController = (mongoose: MongooseType, authService: Function) => {
  const login = (req: RequestType, res: ResponseType, next: NextType) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).send({ error: error.array() });
  };
  const register = (req: RequestType, res: ResponseType, next: NextType) => {};
  const token = (req: RequestType, res: ResponseType, next: NextType) => {};
  return {
    login,
    register,
    token,
  };
};

export default authController;
