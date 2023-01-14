import Function from "../models/Function.js";
import Agent from "../models/Agent.js";

export const getFunctions = async(req, res, next) => {
    try {
        const fonctions = await Function.find();
        return res.status(200).json(fonctions);
    } catch (error) {
        return res.status(500).json({message: "An error was occured!! error: " + error});
    }
}

export const getFunctionById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const fonction = await Function.findById(id).populate("agents");
        return res.status(200).json(fonction);
    } catch (error) {
        return res.status(500).json({ message: `unable to find Function by this ID. ERROR: ${error}`})
    }
}


export const addFunction = async(req, res, next) => {
    const { name, baseSalary } = req.body;
    try {
        const fonction = new Function({ name, baseSalary });
        await fonction.save();
        return res.status(201).json({ message: "new Function Added Successfully"}); 
    } catch (error) {
        return res.status(500).json({ message: "unable to create new funtion"})
    }
}

export const addAgentFunction = async(req, res, next) => {
    const agentId = req.params.agentId;
    const functionId = req.params.functionId;

    try {
        const agent = await Agent.findById(agentId);
        const fonction = await Function.findById(functionId);

        agent.fonction = fonction;
        fonction.agents.push(agent);

        await fonction.save();
        await agent.save();

        return res.status(202).json({ message: "new agent assigned to a function with success"});

    } catch (error) {
        return res.status(500).json({ message: `Unable to assigned a Function. ERROR: ${error}`});
    }
}

export const updateFunction = async(req, res, next) => {
    const id = req.params.id;
    const { name, baseSalary } = req.body;
     try {
        const fonction = await Function.findByIdAndUpdate(id, {
            name, baseSalary
        });
        await fonction.save();
        return res.status(202).json(fonction);
    } catch (error) {
        return res.status(500).json({ message: `Unable to update Function by this Id. Error: ${error}` });
    }
}

export const deleteFunction = async(req, res, next) => {
    const id = req.params.id;
    try {
        const fonction = await Function.findById(id);
        const agents = fonction.agents;

        agents.map(async (agent) => {
            const agentToUpdate = await Agent.findById(agent);
            agentToUpdate.fonction = null;
            await agentToUpdate.save();
        })

        await Function.findByIdAndRemove(id);
        return res.status(200).json({ message: "Function deleted successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Unable to delete Function by this Id"});
    }
}
