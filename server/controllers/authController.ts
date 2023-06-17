import { RequestType, ResponseType, NextType } from "../types/express";
import { validationResult } from "express-validator";
import User from "../entities/user";
import { ResponseEnum } from "../constants/enums/enums";
import { config } from "../config/config";

const authController = (authService: Function) => {
  const login = async (req: RequestType, res: ResponseType, next: NextType) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Cred, error: error.array()[0] });
    try {
      const isExist = await User.findOne({ email: req.body.email });
      if (!isExist)
        return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
      const isMatch = await authService().comparePassword(
        isExist.password,
        req.body.password
      );
      if (!isMatch)
        return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
      const accessToken = authService().generateToken(
        {
          email: req.body.email,
        },
        config.secret,
        { expiresIn: "2m" }
      );
      const refreshToken = authService().generateToken(
        {
          email: req.body.email,
        },
        config.refresh,
        { expiresIn: "5m" }
      );
      res.cookie("access", accessToken, { httpOnly: true, secure: true });
      res.cookie("refresh", refreshToken, { httpOnly: true, secure: true });
      return res
        .status(200)
        .send({ access: accessToken, refresh: refreshToken });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };

  const register = async (
    req: RequestType,
    res: ResponseType,
    next: NextType
  ) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Cred, error: error.array()[0] });
    try {
      const isExist = await User.findOne({ email: req.body.email });
      if (isExist)
        return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
      const encrypted_pass = await authService().encryptPassword(
        req.body.password
      );
      const user = new User({
        email: req.body.email,
        password: encrypted_pass,
        username: req.body.username,
      });
      await user.save();
      const accessToken = authService().generateToken(
        {
          email: req.body.email,
        },
        config.secret,
        { expiresIn: "2m" }
      );
      const refreshToken = authService().generateToken(
        {
          email: req.body.email,
        },
        config.refresh,
        { expiresIn: "5m" }
      );
      return res
        .status(201)
        .send({ access: accessToken, refresh: refreshToken });
    } catch (err: Error | unknown) {
      console.log(err);
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };

  const token = async (req: RequestType, res: ResponseType, next: NextType) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Token, error: error.array()[0] });

    try {
      const user = authService().verifyToken(req.body.token, config.refresh);
      if (!user)
        return res.status(401).send({ message: ResponseEnum.Invalid_Token });
      const accessToken = authService().generateToken(
        { email: user.email },
        config.secret
      );
      return res.status(201).send({ access: accessToken });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };

  return {
    login,
    register,
    token,
  };
};

export default authController;
