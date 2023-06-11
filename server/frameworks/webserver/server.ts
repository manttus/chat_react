import { config } from "../../config/config";
import { AppType } from "../../types/express.types";

const serverConfig = (app: AppType, server: any) => {
  const startServer = () => {
    app.listen(config.port, () => {
      console.log({ message: `Server started in port ${config.port}` });
    });
  };
  const startSocketServer = () => {
    server.listen(config.socket, () => {
      console.log({
        message: `Socket server started in port ${config.socket}`,
      });
    });
  };
  return {
    startServer,
    startSocketServer,
  };
};

export default serverConfig;
