import jwt, { JwtPayload } from "jsonwebtoken";
import { NextType, ResponseType, RequestType } from "../../../types/express";
import { config } from "../../../config/config";

const authorization = (req: RequestType, res: ResponseType, next: NextType) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(400).send({ message: "No Token Found" });
  jwt.verify(token!, config.secret, (err, user) => {
    if (err) {
      return res.status(401).send({ message: "Token Expired" });
    }
    req.body.email = (user! as JwtPayload).email;
    next();
  });
};

export default authorization;
