import Absence from "../models/Absence.js"

export const getAbsences = async(req, res, next)=> {
    try {
        const absences = await Absence.find();
        return res.status(200).json(absences);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Absence list.
            Error: ${error}`
        })
    }
}

export const getAbsence = async(req, res, next) => {
    const id = req.params.id;
    try {
        const absence = await Absence.findById(id);
        return res.status(200).json(absence);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Absence by this ID.
            Error: ${error}`
        })
    }
}

export const createAbsence = async(req, res, next) => {
    const { dateBegin, dateEnding, justification, owner } = req.body;
    try {
        const absence = new Absence({
            dateBegin, dateEnding, justification, owner
        });
        await absence.save();
        return res.status(201).json(absence);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create new Absence.
            Error: ${error}`
        })
    }
}

export const updateAbsence = async(req, res, next) => {
    const id = req.params.id;
    const { dateBegin, dateEnding, justification } = req.body;
    try {
        const absence = await Absence.findByIdAndUpdate(id,{
            dateBegin, dateEnding, justification
        });
        await absence.save();
        return res.status(202).json(absence);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Absence by this ID.
            Error: ${error}`
        })
    }
}

export const deleteAbsence = async(req, res, next) => {
    const id = req.params.id;
    try {
        await Absence.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Absence deleted Successfully`
        })
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete Absence by this ID.
            Error: ${error}`
        })
    }
}