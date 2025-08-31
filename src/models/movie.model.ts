import mongoose from "mongoose";
import { Movie } from "../schema/movie.schema";
// export interface MovieAttr {
//   title: string;
//   year: number;
//   rating?: number;
//   genre: string[];
//   actors: mongoose.Types.ObjectId[];
// }

export interface MovieDocument extends Movie, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
const movieSchema = new mongoose.Schema<MovieDocument>(
  {
    title: {
      type: String,
      required: [true, "movie must have a name !"],
      unique: true,
    },
    year: { type: Number, required: [true, "movie must have a year!"] },
    rating: { type: Number, min: 1, max: 10, default: 9 },
    genre: [String],
    actors: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Actor",
        required: [true, "actor can not be empty"],
      },
    ],
  },
  { timestamps: true }
);

movieSchema.pre<mongoose.Query<MovieDocument[], MovieDocument>>(
  /^find/,
  function (next) {
    this.populate({ path: "actors" });
    next();
  }
);
export default mongoose.model<MovieDocument>("Movie", movieSchema);
