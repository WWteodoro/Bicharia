import { Request, Response } from "express";
import { IInteractionRepository } from "../../interfaces/IInteractionRepository";
import { CreateInteractionService } from "../../services/CreateInteractionService";

export class CreateInteractionController{
    constructor(private interactionRepo: IInteractionRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { reaction, userId } = req.body;

        const createInteractionService = new CreateInteractionService(this.interactionRepo)
        await createInteractionService.execute({ reaction, userId})
        
        return res.status(200).json({})
    }
}