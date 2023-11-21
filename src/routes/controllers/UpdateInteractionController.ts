import { Request, Response } from "express";
import { IInteractionRepository } from "../../interfaces/IInteractionRepository";
import { IInteraction } from "../../interfaces/IInteractionInterface";
import { UpdateInteractionService } from "../../services/UpdateInteractionService";

export class UpdateInteractionController{
    constructor(private interactionRepo: IInteractionRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const { reaction, userId}: IInteraction = req.body;

        const updateInteractionService = new UpdateInteractionService(this.interactionRepo)
        await updateInteractionService.execute({ id, reaction})

        return res.status(201).json()
    }
}