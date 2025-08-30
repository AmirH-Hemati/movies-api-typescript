import mongoose from "mongoose";

export interface Actor {
  name: string;
  age: number;
}

export interface ActorDocument extends Actor, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
const actorSchema = new mongoose.Schema<ActorDocument>(
  {
    name: {
      type: String,
      required: [true, "Actor must have a name !"],
    },
    age: { type: Number, required: [true, "Actor must have a age!"] },
  },
  { timestamps: true }
);

export default mongoose.model<ActorDocument>("Actor", actorSchema);
