import mongoose from "mongoose";

const Schema = mongoose.Schema;

const missionSchema = new Schema({
    name: {
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
        type: [mongoose.Types.ObjectId],
        ref: "Agent"
    }
});

const Mission = mongoose.model("Mission", missionSchema);

export default Mission;