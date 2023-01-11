import express from "express";
import { addAgent, getAgent, getAllAgent, removeAgent, updateAgent } from "../controllers/AgentController.js";

const router = express.Router();

router.get("/", getAllAgent);
router.get("/:id", getAgent);
router.post("/", addAgent);
router.put("/:id", updateAgent);
router.delete("/:id", removeAgent);

export default router;