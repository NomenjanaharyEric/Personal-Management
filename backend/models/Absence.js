import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AbsenceSchema = new Schema({
    dateBegin: {
        type: String,
        required: true
    },
    dateEnding: {
        type: String,
        required: true
    },
    justification: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Agent",
        required: true
    }
},{
    timestamps: true
});

const Absence = mongoose.model("Absence", AbsenceSchema);

export default Absence;
