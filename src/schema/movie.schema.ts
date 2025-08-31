import { z } from "zod";
import mongoose from "mongoose";
export const movieSchema = z.object({
  title: z.string().min(3),
  year: z.number(),
  rating: z.number().min(1).max(10).optional(),
  genre: z.array(z.string()).nonempty(),
  actors: z
    .array(
      z.string().refine((value) => mongoose.Types.ObjectId.isValid(value), {
        message: "Invalid objectId",
      })
    )
    .nonempty(),
});

export type Movie = z.infer<typeof movieSchema>;
