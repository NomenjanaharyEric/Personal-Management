import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FunctionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    baseSalary: {
        type: Number,
        required: true
    },
    
    agents: {
        type: [mongoose.Types.ObjectId],
        ref: 'Agent'
    }
});

const Function = mongoose.model("Fonction", FunctionSchema);

export default Function;