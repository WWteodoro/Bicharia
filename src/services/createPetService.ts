import { IPetsCreateRequest } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { validatePassword, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";
import { Pet } from "../entities/pets";
import { IUserRepository } from "../interfaces/IUserRepository";
import shortid from 'shortid';

export class CreatePetService {
    constructor(private petsRepo: IPetsRepository, private userRepo: IUserRepository) {}

    async execute({ name, type, password, confirmPassword, photo, owners }: IPetsCreateRequest): Promise<void> {
        if (!validatePassword(password)) {
            throw new AppError('A senha não atende aos requisitos');
        }

        if (confirmPassword && !validateConfirmPassword(confirmPassword, password)) {
            throw new AppError('A confirmação de senha não é igual à senha');
        }

        const id = shortid.generate();

        const novoPet = new Pet({
            name,
            type,
            password,
            photo,
            owners: owners || [], 
        });

        await this.petsRepo.createPet(novoPet.toJson());
    }
}