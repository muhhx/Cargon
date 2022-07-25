import { Request, Response, NextFunction } from "express";

module.exports = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /**
   * Error handling
   */
  return res.status(500).json({
    status: "error",
    message: "Algo de errado aconteceu em nosso servidor. ",
  });
};
