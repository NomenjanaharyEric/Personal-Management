import express from "express";
import { addFunction, deleteFunction, getFunctions, updateFunction, addAgentFunction, getFunctionById } from "../controllers/FunctionController.js";

const router = express.Router();

router.get("/", getFunctions);
router.get("/:id", getFunctionById);
router.post("/", addFunction);
router.post("/agent/:agentId/fonction/:functionId", addAgentFunction)
router.put("/:id", updateFunction);
router.delete("/:id", deleteFunction);

export default router;