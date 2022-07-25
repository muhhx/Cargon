import { Application } from "express";
import {
  handleCreateUser,
  handleGetUsers,
} from "./controllers/user.controller";
const errorHandlerMiddleware = require("./middlewares/error.middleware");

const routes = (app: Application) => {
  /**
   * API Routing
   */
  app.post("/api/v1/users", handleCreateUser);
  app.get("/api/v1/users", handleGetUsers);

  app.use(errorHandlerMiddleware);
};

module.exports = routes;
