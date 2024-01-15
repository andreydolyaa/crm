import express, { Router } from "express";
import {
  addAgent,
  deleteAgent,
  getAgents,
} from "../controllers/agentController";

const router: Router = express.Router();

router
  .route("/agents")
  .get(getAgents)
  .post(addAgent)
  .delete(deleteAgent);

export default router;
