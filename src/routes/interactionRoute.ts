import { NextFunction, Request, Response, Router, response } from "express";
import { InteractionRepository } from "../repositories/InteractionRepository";
import { CreateInteractionController } from "./controllers/CreateInteractionController";
import { GetInteractionController } from "./controllers/GetInteractionController";
import { ListInteractionsController } from "./controllers/ListInteractionsController";
import { UpdateInteractionController } from "./controllers/UpdateInteractionController";
import { DeleteInteractionController } from "./controllers/DeleteInteractionController";
import { resolveController } from "../adapters/resolveController";
import { IInteractionGetByUsersRequest } from "../interfaces/IInteractionInterface";

export const interactionRoute = Router()

const interactionRepo = new InteractionRepository()
const createInteractionController = new CreateInteractionController(interactionRepo)
const getInteractionController = new GetInteractionController(interactionRepo)
const listInteractionsController = new ListInteractionsController(interactionRepo)
const updateInteractionController = new UpdateInteractionController(interactionRepo)
const deleteInteractionController = new DeleteInteractionController(interactionRepo)

interactionRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createInteractionController.handle(req,res)
}))

interactionRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getInteractionController.handle(req,res)
}))

interactionRoute.get('/:id', resolveController(async(_: Request, res: Response) => {
    return await listInteractionsController.handle(_,res)
}))

interactionRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updateInteractionController.handle(req,res)
}))

interactionRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deleteInteractionController.handle(req,res)
}))