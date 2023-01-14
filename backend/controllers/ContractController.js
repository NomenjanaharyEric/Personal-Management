import Agent from "../models/Agent.js";
import Contract from "../models/Contract.js";

export const createContract = async(req, res, next) => {
    const { name, description, dateBegin, dateEnding, owner } = req.body;
    try {
        const contract = new Contract({
            name, description, dateBegin, dateEnding, owner
        });
        await contract.save();
        
        const agent = await Agent.findById(owner);
        agent.contract.push(contract);
        await agent.save();

        return res.status(201).json(contract);
    } catch (error) {
        return res.status(500).json({
            message: `An error was occured while creating new Contract.
            Error: ${error}`
        })
    }
}

export const getContracts = async(req, res, next) => {
    try {
        const contracts = await Contract.find();
        return res.status(200).json(contracts);
    } catch (error) {
        return res.status(500).json({
            message: `An error was occured while fetching Contract list.
            Error: ${error}`
        })
    }
}

export const getContractById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const contract = await Contract.findById(id).populate("owner");
    } catch (error) {
        return res.status(500).json({
            message: `An error was occured while getting Contract by this ID.
            Error: ${error}`
        })
    }
}

export const updateContract = async(req, res, next) => {
    const id = req.params.id;
    const { name, description, dateBegin, dateEnding } = req.body;
    try {
        const contract = await Contract.findByIdAndUpdate(id, {
            name, description, dateBegin, dateEnding
        });
        await contract.save();
        return res.status(202).json(contract);
    } catch (error) {
        return res.status(500).json({
            message: `An error was occured while updating Contract by this ID.
            Error: ${error}`
        })
    }
}

export const deleteContract = async(req, res, next) => {
    const id = req.params.id;
    try {
        const contract = await Contract.findById(id);
        const agent = await Agent.findById(contract.owner);

        agent.contract.pull(contract);
        await contract.save();

        await Contract.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Contract deleted successfully`
        });
    } catch (error) {
        return res.status(500).json({
            message: `An error was occured while removing Contract by this ID.
            Error: ${error}`
        })
    }
}