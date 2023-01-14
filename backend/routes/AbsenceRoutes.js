import express from "express";
import { createAbsence, deleteAbsence, getAbsence, getAbsences, updateAbsence } from "../controllers/AbsenceController";

const router = express.Router();

router.get("/", getAbsences);
router.get("/:id", getAbsence);
router.post("/", createAbsence);
router.put("/:id", updateAbsence);
router.delete("/:id", deleteAbsence);


export default router;