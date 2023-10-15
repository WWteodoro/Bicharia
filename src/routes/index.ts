import express from "express";
import { mainRouter } from "./mainRoute";
import { petsRoute } from "./petsRoute";

export const route = express.Router();

route.use('/', mainRouter)
route.use('/pets', petsRoute)
