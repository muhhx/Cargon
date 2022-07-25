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
  app.post("/user/create", handleCreateUser);
  app.get("/users", handleGetUsers);

  app.use(errorHandlerMiddleware);
};

module.exports = routes;
