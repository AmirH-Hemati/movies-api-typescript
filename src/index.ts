import express from "express";
import app from "./app";
import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/movies-typescript")
  .then(() => console.log("successfully connected to mongoDB"));
app.listen(3000, () => {
  console.log("listen on port 3000");
});
