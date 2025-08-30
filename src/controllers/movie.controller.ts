import { Request, Response } from "express";
import Movie, { MovieDocument } from "../models/movie.model";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./factoryHandler";

export const createMovie = createOne<MovieDocument>(Movie);
export const getMovies = getAll<MovieDocument>(Movie);
export const getMovie = getOne<MovieDocument>(Movie);
export const deleteMovie = deleteOne<MovieDocument>(Movie);
export const updateMovie = updateOne<MovieDocument>(Movie);
