import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller";

const router = express.Router();

router.route("/").get(getMovies).post(createMovie);

router.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMovie);
export default router;
