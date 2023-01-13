import express from "express";
import { createMission, deleteMission, getMissionById, getMissions, updateMission } from "../controllers/MissionController.js";

const router = express.Router();

router.get("/", getMissions);
router.get("/:id", getMissionById);
router.post("/", createMission);
router.put("/:id", updateMission);
router.delete("/:id", deleteMission);

export default router;