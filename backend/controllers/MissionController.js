import Agent from "../models/Agent.js";
import Mission from "../models/Mission.js"

export const getMissions = async(req, res, next) => {
    try {
        const missions = await Mission.find();
        return res.status(200).json(missions);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Mission list.
            ERROR: ${error}`
        })
    }
}

export const getMissionById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const mission = await Mission.findById(id);
        return res.status(200).json(mission);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Mission by this ID.
            Error: ${error}`
        })
    }
}

export const createMission = async(req, res, next) => {
    const { name, dateBegin, dateEnding, owner } = req.body;
    try {
        const mission = new Mission({
            name, dateBegin, dateEnding, owner
        });
        // update agent
        const agent = await Agent.findById(owner);
        agent.missions.push(mission);
        await agent.save();
        return res.status(201).json(mission);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create new Mission`
        });
    } 
}

export const updateMission = async(req, res, next) => {
    const id = req.params.id;
    const { name, dateBegin, dateEnding } = req.body;
    try {
        const mission = await Mission.findByIdAndUpdate(id, {
            name, dateBegin, dateEnding
        });
        return res.status(202).json(mission);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Mission by this Id.
            Error: ${error}`
        })
    }
}

export const deleteMission = async(req, res, next) => {
    const id = req.params.id;
    try {
        const mission = await Mission.findById(id);
        const agent = await Agent.findById(mission.owner);

        agent.missions.pull(mission);
        await agent.save();

        await Mission.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Mission deleted successfully`
        })
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete Mission by this ID`
        })
    }
}