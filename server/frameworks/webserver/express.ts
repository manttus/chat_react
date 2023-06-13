import {
  AppType,
  NextType,
  RequestType,
  ResponseType,
} from "../../types/express";
import errorHandlingMiddleware from "./middlewares/error";

const expressConfig = (app: AppType, json: Function, cors: Function) => {
  app.use(json());
  app.use(cors());
  app.use(errorHandlingMiddleware);
  app.use((_: RequestType, res: ResponseType, next: NextType) => {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-type, Authorization, Cache-control, Pragma"
    );
    next();
  });
};

export default expressConfig;
