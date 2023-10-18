import { Request, Response } from "express";
import { IPetsRepository } from "../interfaces/petsRepository";
import { CreatePetService } from "../services/createPetService";

export class CreatePetController {
    constructor(private petsRepo: IPetsRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, type, password, confirmPassword } = req.body;

        try {
            const createPetService = new CreatePetService(this.petsRepo);
            const novoPet = await createPetService.execute({ name, type, password, confirmPassword });

            return res.json(novoPet);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
