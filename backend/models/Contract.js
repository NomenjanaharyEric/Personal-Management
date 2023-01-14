import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contractSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    dateBegin: {
        type: String,
        required: true
    },
    dateEnding: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, { timestamps: true });

const Contract = mongoose.model("Contract", contractSchema );

export default Contract;
