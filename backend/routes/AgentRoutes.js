import express from "express";
import { addAgent, getAgent, getAllAgent, removeAgent, updateAgent } from "../controllers/AgentController.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.get("/", getAllAgent);
router.get("/:id", getAgent);
router.post("/",upload("photo"), addAgent);
router.put("/:id", updateAgent);
router.delete("/:id", removeAgent);

export default router;