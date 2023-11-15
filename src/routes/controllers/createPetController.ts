import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { CreatePetService } from "../../services/CreatePetService";

export class CreatePetController {
    constructor(private petsRepo: IPetsRepository, private userRepo: IUserRepository) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, type, password, confirmPassword, photo, userId } = req.body;

        try {
            const createPetService = new CreatePetService(this.petsRepo, this.userRepo);
            await createPetService.execute({ name, type, password, confirmPassword, photo, userId });

            return res.status(201).json({ message: 'Pet criado com sucesso' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
