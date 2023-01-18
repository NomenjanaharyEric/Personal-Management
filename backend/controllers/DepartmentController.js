import Department from "../models/Department"

export const getDepartments = async(req, res) => {
    try {
        const departments = await Department.find();
        return res.status(200).json(departments);
    } catch (error) {
        return res.status(500).json({
            message:`Unable to get department list.
            Error: ${error}`
        })
    }
}

export const getDepartment = async(req, res) => {
    const id = req.params.id;
    try {
        const department = await Department.findById(id);
        return res.status(200).json(department);
    } catch (error) {
        return res.status(500).json({
            message:`Unable to get department by this ID.
            Error: ${error}`
        })
    }
}

export const createDepartment = async(req, res, next) => {
    const { name } = req.body;
    try {
        const department = new Department({
            name
        });
        await department.save();
        return res.status(201).json(department);
    } catch (error) {
        return res.status(500).json({
            message:`Unable to create new department.
            Error: ${error}`
        })
    }
}

export const updateDepartment = async(req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    try {
        const department = await Department.findByIdAndUpdate(id, { name });
        return res.status(200).json(department);
    } catch (error) {
        return res.status(500).json({
            message:`Unable to get department by this ID.
            Error: ${error}`
        })
    }
}


export const deleteDepartment = async(req, res) => {
    const id = req.params.id;
    try {
        await Department.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Department deleted with success`
        })
    } catch (error) {
        return res.status(500).json({
            message:`Unable to get department by this ID.
            Error: ${error}`
        })
    }
}


