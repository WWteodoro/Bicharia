import express from "express";
import { mainRouter } from "./mainRoute";
<<<<<<< HEAD
import { petsRoute } from "./petsRoute";
=======
import { userRoute } from "./userRoute";
>>>>>>> 5701dbde88c812b00a687deed9c529ca66227667

export const route = express.Router();

route.use('/', mainRouter)
<<<<<<< HEAD
route.use('/pets', petsRoute)
=======
route.use('/users', userRoute)
>>>>>>> 5701dbde88c812b00a687deed9c529ca66227667
