import mongoose from "mongoose";

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    agents: {
        type: [mongoose.Types.ObjectId],
        ref: "Agent"
    }
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;