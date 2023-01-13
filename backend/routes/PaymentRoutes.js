import express from "express";
import { createPayment, deletePayment, getPaymentByID, getPayments, updatePayment } from "../controllers/PaymentController.js";

const router = express.Router();

router.get('/', getPayments);
router.get('/:id', getPaymentByID);
router.post("/", createPayment);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

export default router;