import Degree from "../models/Degree.js";
import Agent from "../models/Agent.js";

export const createDegree = async(req, res, next) => {
    const { name, dateObtained, schoolName, description, owner } = req.body;
    
    try {
        const degree = new Degree({
            name, dateObtained, schoolName, description, owner
        });
        await degree.save();

        const agent = await Agent.findById(owner);
        agent.degrees.push(degree);
        await agent.save();

        return res.status(201).json(degree);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create new Degree.
            Error: ${error}`
        })
    }
}

export const getDegrees = async(req, res, next) => {
    try {
        const degrees = await Degree.find();
        return res.status(200).json(degrees);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Degrees. ERROR: ${error}`
        })
    }
}

export const getDegreeByAgent = async(req, res, next) => {
    const agentId = req.params.agentId;
    try {
        const agent = await Agent.findById(agentId).populate("degrees");
        return res.status(200).json(agent);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Degree for this Agent. ERROR: ${error}`
        })
    }
}

export const getDegreeById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const degree = await Degree.findById(id).populate("owner");
        return res.status(200).json(degree);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Degree by this ID. ERROR: ${error}`
        })
    }
}

export const updateDegree = async(req, res, next) => {
    const id = req.params.id;
    const { name, dateObtained, schoolName, description } = req.body;
    
    try {
        const degree = await Degree.findByIdAndUpdate(id, {
            name, dateObtained, schoolName, description
        }) 
        await degree.save();
        return res.status(202).json({
            message: `Degree updated with success`
        });
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Degree by this ID. ERROR: ${error}`
        })
    } 
}

export const deleteDegree = async(req, res, next) => {
    const id = req.params.id;
    try {
        const degree = await Degree.findById(id);
        const agent = await Agent.findById(degree.owner);

        agent.degrees.pull(degree);

        await agent.save();

        await Degree.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Degree deleted successfully`
        })
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete Degree by this ID. ERROR: ${error}`
        })
    }
}