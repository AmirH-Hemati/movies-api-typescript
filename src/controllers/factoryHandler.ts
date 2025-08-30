import ApiFeatures from "../utils/ApiFeatures";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import { Document, Model } from "mongoose";

export const createOne = <T extends Document>(Model: Model<T>) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: "success", data: doc });
  });
};

export const getAll = <T extends Document>(Model: Model<T>) => {
  return catchAsync(async (req, res, next) => {
    const features = new ApiFeatures<T>(Model, req.query)
      .filter()
      .Sort()
      .limitFields()
      .paginate();

    const docs = await features.query;
    res.status(200).json({ status: "success", data: { data: docs } });
  });
};

export const getOne = <T extends Document>(Model: Model<T>) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("No Document found with that ID", 404));
    }
    res.status(200).json({ status: "success", data: { data: doc } });
  });
};
export const deleteOne = <T extends Document>(Model: Model<T>) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No Document found with that ID", 404));
    }
    res.status(204).json({ status: "success", data: null });
  });
};
export const updateOne = <T extends Document>(Model: Model<T>) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No Document found with that ID", 404));
    }
    res.status(200).json({ status: "success", data: { data: doc } });
  });
};
