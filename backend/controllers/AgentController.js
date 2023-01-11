import Agent from "../models/Agent.js"

// get agent list
export const getAllAgent = async(req, res, next) => {
    try {
        const agents = await Agent.find();
        console.log(agents);
        return res.status(200).json(agents);
    } catch (error) {
        return res.status(500).json({message : 'Unable to get agent list'});
    }
}

// get agent by this Id
export const getAgent = async(req, res, next) => {
    const id = req.params.id;
    try {
        const agent = await Agent.findById(id);
        return res.status(200).json(agent);
    } catch (error) {
        return res.status(400).json({message: "Unable to find agent by this id"});
    }
}

// add new agent
export const addAgent = async(req, res, next)=> {
    const { name, lastname, adress, dateOfBirth, cin,photo,familyStatus, nationality,email,phone } = req.body;
    // const photo = req.file.originalname;
    
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
        name, lastname, adress, dateOfBirth, cin, photo,familyStatus, nationality,email,phone
       });

       await agent.save();
       return res.status(201).json(agent);

    } catch (error) {
        return res.status(500).json({ message: "Unable to add new agent"});
    }
}

// update agent
export const updateAgent = async(req, res, next) => {
    const id = req.params.id;
    const { name, lastname, adress, dateOfBirth, cin, familyStatus, nationality, email, phone } = req.body;

    try {
       const agent = await Agent.findByIdAndUpdate(id,{
        name, lastname, adress, dateOfBirth, cin, familyStatus, nationality, email, phone
       });
       await agent.save();

       return res.status(202).json(agent);

    } catch (error) {
        return res.status(500).json({ message: "Unable to update agent by this id" });
    }
}

// remove agent
export const removeAgent = async(req, res, next) => {
    const id = req.params.id;
    try {
        await Agent.findByIdAndRemove(id);
        return res.status(200).json({ message: "agent deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: " unable to delete agent by this id"});
    }
}