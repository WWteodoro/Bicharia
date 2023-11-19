import { Request, Response } from 'express';
import { IPetsRepository } from '../../interfaces/IPetsRepository'; 
import { IUserRepository } from '../../interfaces/IUserRepository'; 
import { CreatePetService } from '../../services/createPetService';

export class CreatePetController {
    private createPetService: CreatePetService;

    constructor(private petsRepo: IPetsRepository, private userRepo: IUserRepository) {
        this.createPetService = new CreatePetService(petsRepo, userRepo);
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { name, type, password, confirmPassword, photo, owners } = req.body;

            await this.createPetService.execute({
                name,
                type,
                password,
                confirmPassword,
                photo,
                owners,
            });

            res.status(201).json({ message: 'Pet criado com sucesso!' });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                res.status(500).json({ message: `Erro interno no servidor - ${error.message}` });
            } else {
                res.status(500).json({ message: 'Erro interno no servidor - Erro desconhecido' });
            }
        }
    }
}
