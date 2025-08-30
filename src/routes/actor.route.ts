import express from "express";
import {
  getActors,
  createActor,
  getActor,
  updateActor,
  deleteActor,
} from "../controllers/actor.controller";
const router = express.Router();

router.route("/").get(getActors).post(createActor);

router.route("/:id").get(getActor).patch(updateActor).delete(deleteActor);
export default router;
