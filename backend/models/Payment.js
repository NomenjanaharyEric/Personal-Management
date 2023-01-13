import mongoose from "mongoose";

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    datePayment: {
        type: String,
        required: true,
    },
    agent: {
        type: mongoose.Types.ObjectId,
        ref: "Agent"
    }, 
    isPayd: {
        type: Boolean,
        default: false
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;