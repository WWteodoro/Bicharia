import { Request, Response } from "express";
import { IInteractionGetByUsersRequest } from "../../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../../interfaces/IInteractionRepository";
import { ListInteractionsService } from "../../services/ListInteractionsRequest";



export class ListInteractionsController{
    constructor(private interactionRepo: IInteractionRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params

        const listInteractionsService = new ListInteractionsService(this.interactionRepo)   
        const interactions = await listInteractionsService.execute({ userId })
        return res.json(interactions)
    }
}

