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
  const updateUser = async (
    req: RequestType,
    res: ResponseType,
    _: NextType
  ) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Cred, error: error.array()[0] });
    try {
      const update = {
        username: req.body.username,
        image: req.body.image,
      };
      const isExist = await user.findOneAndUpdate(
        { email: req.body.email },
        update
      );
      if (!isExist)
        return res.status(400).send({
          message: ResponseEnum.Invalid_Cred,
        });
      return res.status(200).send({ message: "User Updated" });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };
  const deleteUser = async (
    req: RequestType,
    res: ResponseType,
    _: NextType
  ) => {
    const update = {
      username: "user",
      email: "user",
      password: "user",
      image: "user",
    };
    try {
      const isExist = await user.findOneAndUpdate(
        { email: req.body.email },
        update
      );
      if (!isExist)
        return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
      return res.status(200).send({ message: "User Removed" });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };
  return {
    profileUser,
    updateUser,
    deleteUser,
  };
};

export default userController;
