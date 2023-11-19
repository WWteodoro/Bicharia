import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { UpdatePetService } from "../../services/UpdatePetService";
import { Request, Response } from "express";

export class UpdatePetController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { newId, photo, name, type, password, confirmPassword } = req.body;

        const updatePetService = new UpdatePetService(this.petsRepo);

        try {
            await updatePetService.execute({ id, photo, newId, name, type, password, confirmPassword });

            return res.status(200).json({ message: 'Pet atualizado com sucesso' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}