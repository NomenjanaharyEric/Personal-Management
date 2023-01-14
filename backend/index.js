// Modules import
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes import
import AgentRoutes from "./routes/AgentRoutes.js";
import FunctionRoutes from "./routes/FunctionRoutes.js";
import DegreeRoutes from "./routes/DegreeRoutes.js";
import ContractRoutes from "./routes/ContractRoutes.js";
import MissionRoutes from "./routes/MissionRoutes.js";
import AbsenceRoutes from "./routes/AbsenceRoutes.js";
import PaymentRoutes from "./routes/PaymentRoutes.js";
import ServiceRoutes from "./routes/ServiceRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5555;
const MONGO_URI = process.env.MONGO_URI;

// Database setting and connection
mongoose.set(`strictQuery`, true);
mongoose.connect(MONGO_URI)
.then(()=> console.log(`database connected successfully`))
.catch((err)=> console.log(err));

// routes
app.use("/api/agent", AgentRoutes);
app.use("/api/function", FunctionRoutes);
app.use("/api/degree", DegreeRoutes);
app.use("/api/contract", ContractRoutes);
app.use("/api/mission", MissionRoutes);
app.use("/api/absence", AbsenceRoutes);
app.use("/api/payment", PaymentRoutes);
app.use("/api/service", ServiceRoutes);

// launch server
app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`));