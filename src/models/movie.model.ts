import mongoose from "mongoose";

export interface MovieAttr {
  title: string;
  year: number;
  rating?: number;
  genre: string[];
  actor: mongoose.Types.ObjectId[];
}

export interface MovieDocument extends MovieAttr, mongoose.Document {
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
    actor: [{ type: mongoose.Schema.ObjectId, ref: "Actor" }],
  },
  { timestamps: true }
);

export default mongoose.model<MovieDocument>("Movie", movieSchema);
