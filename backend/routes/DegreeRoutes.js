import express from "express";
import { createDegree, deleteDegree, getDegreeByAgent, getDegreeById, getDegrees, updateDegree } from "../controllers/DegreeController.js";

const router = express.Router();

router.get("/", getDegrees);
router.get("/agent/:agentId", getDegreeByAgent);
router.get("/:id", getDegreeById);
router.post("/", createDegree);
router.put("/:id", updateDegree);
router.delete("/:id", deleteDegree);

export default router;