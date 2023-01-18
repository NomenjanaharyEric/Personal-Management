import mongoose from "mongoose";

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    services: {
        type:[mongoose.Types.ObjectId],
        ref:"Service"
    }
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;