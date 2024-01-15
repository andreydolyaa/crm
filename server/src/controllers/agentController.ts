import { HydratedDocument } from "mongoose";
import { Agent } from "../models/agentModel";
import { Controller } from "../types/types";
import { IAgent } from "../models/agentModel";
import { sleep } from "../utils/utils";

export const getAgents: Controller = async (req, res, next) => {
  try {
    const data: IAgent[] = await Agent.find({});
    // await sleep(2000);
    // throw new Error()
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addAgent: Controller = async (req, res, next) => {
  try {
    const agent: HydratedDocument<IAgent> = await Agent.create({
      ...req.body,
    });
    res.status(201).send(agent);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteAgent: Controller = async (req, res, next) => {
  try {
    const agent = await Agent.findOneAndDelete({ id: req.params.id });
    res.status(200).send(agent);
  } catch (error) {
    res.status(400).send(error);
  }
};
