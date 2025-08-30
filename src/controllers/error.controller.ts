import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export default async function errorGlobalHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.message = err.message || "error";
  err.statusCode = err.statusCode || 500;
  return res
    .status(err.statusCode)
    .json({ status: err.status, message: err.message });
}
