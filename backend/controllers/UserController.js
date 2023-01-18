import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(200).json({
            message: `Unable to get user list. Error: ${error}`
        })
    }
}

export const login = async(req,res,next) => {
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(user){
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(password, user.password);
            
            if(validPassword){
                return res.status(200).json("Login successfull");
            }
            return res.status(400).json("Invalid login password");
        }
    } catch (error) {
        return res.status(401).json("Unable to login");
    }
}

export const register = async(req, res, next) => {
    const { name, email, password } = req.body;
    try {

        //check if email already in use
        const existingUser = await User.findOne({ email });
        
        if(existingUser) return res.status(400).json("Email already in use ");

        //generate salt to hash password
        const salt = await bcrypt.genSalt(13);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name, email, password: hashedPassword
        });

        await user.save();

        return res.status(201).json(user);

    } catch (error) {
        return res.status(400).json("Unable to register user");
    }
}