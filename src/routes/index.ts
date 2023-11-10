import express from "express";
import { mainRouter } from "./mainRoute";
import { userRoute } from "./userRoute";
import { petsRoute } from "./petsRoute";
export const route = express.Router();

route.use('/', mainRouter)
route.use('/users', userRoute)
route.use('/pets', petsRoute)