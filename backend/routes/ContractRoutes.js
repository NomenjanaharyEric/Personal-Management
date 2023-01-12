import express from "express";
import { createContract, deleteContract, getContractById, getContracts, updateContract } from "../controllers/ContractController.js";

const router = express.Router();

router.get("/", getContracts);
router.get("/", getContractById);
router.post("/", createContract);
router.put("/:id", updateContract);
router.delete("/:id", deleteContract)


export default router;