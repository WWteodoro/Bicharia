import { Request, Response } from "express";
import { IPetsRepository } from "../interfaces/petsRepository";
import { UpdatePetTypeService } from "../services/updatePetTypeService";

export class UpdatePetTypeController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { newType } = req.body;

        try {
            const updatePetTypeService = new UpdatePetTypeService(this.petsRepo);
            const petAtualizado = await updatePetTypeService.execute(id, newType);
            
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
