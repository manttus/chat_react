import { validationResult } from "express-validator";
import { NextType, RequestType, ResponseType } from "../types/express";
import { ResponseEnum, Status } from "../constants/enums/enums";
import user from "../entities/user";
import otp from "../entities/otp";

const otpController = (mailService: Function) => {
  const _isAlreadySent = async (email: string) => {
    const isExist = await otp.findOne({ email, status: Status.PENDING });
    if (!isExist) return false;
    if (isExist.expiresAt < new Date(Date.now())) {
      isExist.status = Status.EXPIRED;
      await isExist.save();
      return false;
    }
    return true;
  };

  const _generateSend = async (email: string, res: ResponseType) => {
    const generated = mailService().generateOtp();
    const hased = await mailService().hashOtp(generated);
    const resetLink = `http://localhost:5173/${hased}`;
    try {
      await mailService().sendOtp(
        email,
        `${generated} <div> Reset Link ${resetLink} </div> `
      );
      const newOtp = new otp({
        otp: hased,
        email: email,
      });
      await newOtp.save();
      return res.status(200).send({ message: ResponseEnum.Email_Sent });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };

  const sendOtp = async (req: RequestType, res: ResponseType, _: NextType) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Cred, error: error.array()[0] });

    if (await _isAlreadySent(req.body.email))
      return res.status(409).send({ message: ResponseEnum.Email_Already });
    _generateSend(req.body.email, res);
  };

  const authOtp = async (req: RequestType, res: ResponseType, _: NextType) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res
        .status(400)
        .send({ message: ResponseEnum.Invalid_Cred, error: error.array()[0] });
    const isExist = await user.findOne({ email: req.body.email });
    if (!isExist)
      return res.status(400).send({ message: ResponseEnum.Invalid_Cred });
    if (await _isAlreadySent(req.body.email))
      return res.status(409).send({ message: ResponseEnum.Email_Already });
    _generateSend(req.body.email, res);
  };

  const verifyOtp = async (
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
      const isExist = await otp.findOne({
        email: req.body.email,
        status: Status.PENDING,
      });
      if (!isExist)
        return res.status(403).send({ message: ResponseEnum.Invalid_OTP });
      if (isExist.expiresAt < new Date(Date.now())) {
        isExist.status = Status.EXPIRED;
        await isExist.save();
        return res.status(403).send({ message: ResponseEnum.Invalid_OTP });
      }
      if (!(await mailService().compareOtp(req.body.otp, isExist.otp)))
        return res.status(403).send({ message: ResponseEnum.Invalid_OTP });
      isExist.status = Status.VERIFIED;
      await isExist.save();
      return res.status(403).send({ message: ResponseEnum.Email_Verified });
    } catch (err: Error | unknown) {
      console.log(err);
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };
  const verifyLink = async (
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
      const isExist = await otp.findOne({
        otp: req.params.hash,
        status: Status.PENDING,
      });
      if (!isExist)
        return res.status(401).send({ message: ResponseEnum.UnAuthorized });
      if (isExist.expiresAt < new Date(Date.now())) {
        isExist.status = Status.EXPIRED;
        await isExist.save();
        return res.status(403).send({ message: ResponseEnum.Invalid_OTP });
      }
      isExist.status = Status.VERIFIED;
      await isExist.save();
      return res.status(403).send({ message: ResponseEnum.Email_Verified });
    } catch (err: Error | unknown) {
      return res.status(500).send({ message: ResponseEnum.Server_Error });
    }
  };
  return {
    authOtp,
    sendOtp,
    verifyOtp,
    verifyLink,
  };
};

export default otpController;
