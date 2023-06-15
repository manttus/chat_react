import { validationResult } from "express-validator";
import { NextType, RequestType, ResponseType } from "../types/express";
import { ResponseEnum } from "../constants/enums/enums";
import user from "../entities/user";

const userController = () => {
  const profileUser = async (
    req: RequestType,
    res: ResponseType,
    _: NextType
  ) => {
    try {
      const isExist = await user
        .findOne({ email: req.body.email })
        .select("-password");
      if (!isExist)
        return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
      return res.status(200).send({ data: isExist });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };
  const updateUser = (req: RequestType, res: ResponseType, _: NextType) => {};
  const deleteUser = (req: RequestType, res: ResponseType, _: NextType) => {};
  return {
    profileUser,
    updateUser,
    deleteUser,
  };
};

export default userController;
