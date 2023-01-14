import Agent from "../models/Agent.js"

export const getAllAgent = async(req, res, next) => {
    try {
        const agents = await Agent.find();
        return res.status(200).json(agents);
    } catch (error) {
        return res.status(500).json({message : 'Unable to get agent list'});
    }
}

export const getAgent = async(req, res, next) => {
    const id = req.params.id;
    try {
        const agent = await Agent.findById(id);
        return res.status(200).json(agent);
    } catch (error) {
        return res.status(400).json({message: "Unable to find agent by this id"});
    }
}

export const addAgent = async(req, res, next)=> {
    const { matricule,name, lastname, adress, dateOfBirth, cin,photo,familyStatus, nationality,email,phone, sexe} = req.body;
    
    let existingCIN, existingEmail;

    try {
        existingEmail = await Agent.findOne({email});
        existingCIN = await Agent.findOne({cin});
       
       if(existingCIN){
            return res.status(500).json({ message: "CIN already in use by other agent"});
       }

       if(existingEmail){
            return res.status(500).json({ message: "email already in use by other agent"});
       }

       const agent = new Agent({
        matricule, name, lastname, adress, dateOfBirth, cin, photo,familyStatus, nationality,email,phone, sexe
       });

       await agent.save();
       return res.status(201).json(agent);

    } catch (error) {
        return res.status(500).json({ message: `Unable to create new Agent. ERROR: ${error}`});
    }
}

export const updateAgent = async(req, res, next) => {
    const id = req.params.id;
    const { matricule,name, lastname, adress, dateOfBirth, cin, familyStatus, nationality, email, phone, sexe } = req.body;

    try {
       const agent = await Agent.findByIdAndUpdate(id,{
        matricule,name, lastname, adress, dateOfBirth, cin, familyStatus, nationality, email, phone, sexe
       });
       await agent.save();

       return res.status(202).json(agent);

    } catch (error) {
        return res.status(500).json({ message: "Unable to update agent by this id" });
    }
}

export const removeAgent = async(req, res, next) => {
    const id = req.params.id;
    try {
        await Agent.findByIdAndRemove(id);
        return res.status(200).json({ message: "agent deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: " unable to delete agent by this id"});
    }
}