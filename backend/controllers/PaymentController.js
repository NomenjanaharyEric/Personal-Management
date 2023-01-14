import Agent from "../models/Agent.js";
import Payment from "../models/Payment.js"

export const getPayments = async(req, res, next) => {
    try {
        const payments = await Payment.find();
        return res.status(200).json(payments);
    } catch (error) {
        return res.status(500).json({
            message: `unable to get Payment list.
            Error: ${error}`
        })
    }
}

export const getPaymentByID = async(req, res, next) => {
    const id = req.params.id;
    try {
        const payment = await Payment.findById(id);
        return res.status(200).json(payment);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get payment by this ID.
            Error: ${error}`
        })
    }
}

export const createPayment = async(req, res, next) => {
    const { datePayment, agent, isPayd } = req.body;
    try {
        const payment = new Payment({
            datePayment, agent, isPayd   
        });
        await payment.save();

        const agentToPay = await Agent.findById(agent);
        agentToPay.payments.push(payment);
        await agentToPay.save();

        return res.status(201).json(payment);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create payment.
            Error: ${error}`
        })
    }
}

export const updatePayment = async(req, res, next) => {
    const id = req.params.id;
    const { datePayment, agent, isPayd } = req.body; 
    try {
        const payment = await Payment.findByIdAndUpdate(id, {
            datePayment, agent, isPayd
        });
        await payment.save();
        return res.status(202).json(payment);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Payment by this ID.
            Error: ${error}`
        })
    }
}

export const deletePayment = async(req, res, next) => {
    const id = req.params.id;
    try {
        const payment = await Payment.findById(id);
        const agent = await Agent.findById(payment.agent);

        agent.payments.pull(payment);
        await agent.save();

        await Payment.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Payment deleted successfully`
        })
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete Payment by this ID.
            Error: ${error}`
        })
    }
}