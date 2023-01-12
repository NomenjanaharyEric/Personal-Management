import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DegreeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateObtained: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Agent",
        required: true
    }
},{
    timestamps: true
});

const Degree = mongoose.model("Degree", DegreeSchema);

export default Degree;
