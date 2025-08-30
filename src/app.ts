import express from "express";
import morgan from "morgan";
import movieRouter from "./routes/movie.route";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/movies", movieRouter);
export default app;
