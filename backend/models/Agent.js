import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    matricule: {
        type: String,
        required: true,
        unique: true
    }, 
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
    sexe: {
        type: String,
        required: true
    },
    fonction: {
        type: mongoose.Types.ObjectId,
        ref: 'Fonction'
    },
    degrees: {
        type: [mongoose.Types.ObjectId],
        ref: "Degree"
    },
    contract: {
        type: mongoose.Types.ObjectId,
        ref: "Contract"
    },
    missions: {
        type: [mongoose.Types.ObjectId],
        ref: "Mission"
    },
    absences: {
        type: [mongoose.Types.ObjectId],
        ref: "Absence"
    },
    payments: {
        type: [mongoose.Types.ObjectId],
        ref: "Payment"
    }
},
{
    timestamps: true
}
);

const Agent = mongoose.model("Agent", AgentSchema);

export default Agent;