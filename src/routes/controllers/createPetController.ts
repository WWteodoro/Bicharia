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
        const { name, type, password, confirmPassword, photo, owners, userId } = req.body;
            await this.createPetService.execute({
                name,
                type,
                password,
                confirmPassword,
                photo,
                owners,
                userId
            });

        }
}

