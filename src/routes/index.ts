import express from "express";
import { mainRouter } from "./mainRoute";
import { userRoute } from "./userRoute";
import { userAuthenticateRoute } from "./authRoute";

export const route = express.Router();

route.use('/', mainRouter)
route.use('/users', userRoute)
route.use('auth', userAuthenticateRoute)