import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import movieRouter from "./routes/movie.route";
import { afterEach } from "node:test";
import errorGlobalHandler from "./controllers/error.controller";
import AppError from "./utils/AppError";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/movies", movieRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return next(
    new AppError(`can't find this ${req.originalUrl} on this server!`, 400)
  );
});
app.use(errorGlobalHandler);
export default app;
