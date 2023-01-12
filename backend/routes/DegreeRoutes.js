import express from "express";
import { createDegree } from "../controllers/DegreeController.js";

const router = express.Router();

router.post("/", createDegree);

export default router;