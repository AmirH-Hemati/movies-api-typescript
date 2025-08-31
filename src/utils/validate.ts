import { fromZodError } from "zod-validation-error";
import { ZodType } from "zod";
import AppError from "./AppError";
import { NextFunction, Request, Response } from "express";
export default function validate<T extends ZodType<any, any>>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const messages = fromZodError(result.error).message;
      return next(new AppError(messages, 400));
    }
    next();
  };
}
