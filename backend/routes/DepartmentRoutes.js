import express from "express";
import { createDepartment, deleteDepartment, getDepartment, getDepartments, updateDepartment } from "../controllers/DepartmentController.js";

const router = express.Router();

router.get("/", getDepartments);
router.get("/:id", getDepartment);
router.post("/", createDepartment);
router.put("/:id", updateDepartment );
router.delete("/:id", deleteDepartment);

export default router;