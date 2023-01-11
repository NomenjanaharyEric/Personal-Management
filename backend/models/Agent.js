import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
    },
    familyStatus: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const Agent = mongoose.model("Agent", AgentSchema);

export default Agent;