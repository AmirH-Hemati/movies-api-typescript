import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller";
import validate from "../utils/validate";
import { Movie, movieSchema } from "../schema/movie.schema";
const router = express.Router();

router.route("/").get(getMovies).post(validate(movieSchema), createMovie);

router.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMovie);
export default router;
