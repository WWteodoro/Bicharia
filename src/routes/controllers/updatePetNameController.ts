import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { UpdatePetNameService } from "../../services/updatePetNameService";

export class UpdatePetNameController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { newName } = req.body;

        try {
            const updatePetNameService = new UpdatePetNameService(this.petsRepo);
            const petAtualizado = await updatePetNameService.execute(id, newName);

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
