import { IPetsCreateRequest } from "../interfaces/petsInterfaces";
import { IPetsRepository } from "../interfaces/petsRepository";
import { validatePassword, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppErrors";
import { Pet } from "../entities/pets";
import shortid from 'shortid';

export class CreatePetService {
    constructor(private petsRepo: IPetsRepository) {}

    async execute({name, type, password, confirmPassword }: IPetsCreateRequest): Promise<void> {
        const id = shortid.generate();
        if (!validatePassword(password)) {
            throw new AppError('A senha não atende os requisitos');
        }

        if (confirmPassword && !validateConfirmPassword(confirmPassword, password)) {
            throw new AppError('A confirmação de senha não é igual à senha');
        }

        const novoPet = new Pet({name, type, password})
        await this.petsRepo.createPet(novoPet.toJson())
}
}