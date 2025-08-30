import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./factoryHandler";
import Actor, { ActorDocument } from "../models/actor.model";

export const getActors = getAll<ActorDocument>(Actor);
export const createActor = createOne<ActorDocument>(Actor);
export const getActor = getOne<ActorDocument>(Actor);
export const deleteActor = deleteOne<ActorDocument>(Actor);
export const updateActor = updateOne<ActorDocument>(Actor);
