import { CustomError } from "../../../types/error";
import { NextType, RequestType, ResponseType } from "../../../types/express";

const errorHandlingMiddleware = (
  err: CustomError,
  _: RequestType,
  res: ResponseType,
  next: NextType
) => {
  const statusCode = err.status || 404;
  return res.status(statusCode).send({ message: err.message });
};

export default errorHandlingMiddleware;
