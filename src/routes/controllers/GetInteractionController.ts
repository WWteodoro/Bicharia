import { Request, Response } from "express";
import { IInteractionRepository } from "../../interfaces/IInteractionRepository";
import { GetInteractionService } from "../../services/GetInteractionService";

export class GetInteractionController{
    constructor(private interactionRepo: IInteractionRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getInteractionService = new GetInteractionService(this.interactionRepo)
        const result = await getInteractionService.execute({ id })
        
        res.json(result)
        return res.status(201).send()
    }
}