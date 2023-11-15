import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { GetPetByIdService } from "../../services/GetPetByIdService";

export class GetPetByIdController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const getPetByIdService = new GetPetByIdService(this.petsRepo);
            const pet = await getPetByIdService.execute(id);

            if (pet) {
                return res.json(pet);
            } else {
                return res.status(404).json({ error: 'Pet não encontrado' });
            }
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
