import express from "express";
import { mainRouter } from "./mainRoute";
import { userRoute } from "./userRoute";
import { petsRoute } from "./petsRoute";
import { userAuthenticateRoute } from "./authRoute";
import { postRoute } from "./postRoute";
import { interactionRoute } from "./interactionRoute";
export const route = express.Router();

route.use('/', mainRouter)
route.use('/users', userRoute)
route.use('/pets', petsRoute)
route.use('/auth', userAuthenticateRoute)
route.use('/post', postRoute)
route.use('/interaction', interactionRoute)