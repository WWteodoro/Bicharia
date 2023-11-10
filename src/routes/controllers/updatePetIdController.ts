import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { UpdatePetIdService } from "../../services/updatePetIdService";

export class UpdatePetIdController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { newId } = req.body;

        try {
            const updatePetIdService = new UpdatePetIdService(this.petsRepo);
            const petAtualizado = await updatePetIdService.execute(id, newId);
            if (petAtualizado) {
                return res.json(petAtualizado);
            } else {
                return res.status(404).json({ error: 'Pet não encontrado' });
            }
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
