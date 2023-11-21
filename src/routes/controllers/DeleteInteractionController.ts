import { Request, Response } from "express";
import { IInteractionDeleteRequest } from "../../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../../interfaces/IInteractionRepository";
import { DeleteInteractionService } from "../../services/DeleteInterationService";

export class DeleteInteractionController{
    constructor(private interactionRepo: IInteractionRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteInteractionService = new DeleteInteractionService(this.interactionRepo)
        await deleteInteractionService.execute({ id })

        return res.status(200)
    }
}