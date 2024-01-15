import express from "express";
import agentRoutes from "./routes/agentRoutes";

const router = express.Router();

router.use("/api", agentRoutes);

export default router;
