import { IPetsRepository } from "../interfaces/IPetsRepository";
import { AppError } from "../errors/AppError";
import { Pet } from "../entities/pets";
import { IPetsUpdateRequest } from "../interfaces/IPetsInterfaces";

export class UpdatePetService {
    constructor(private petsRepo: IPetsRepository) {}

    async execute({ id, newId, type, name, password, confirmPassword }: IPetsUpdateRequest): Promise<void> {
        const existingPet = await this.petsRepo.findOnePet(id);

        if (!existingPet) {
            throw new AppError('Pet não encontrado');
        }

        const updatedPetData = {
            id: newId || existingPet.id,
            name: name || existingPet.name,
            type: type || existingPet.type,
            password: password || existingPet.password,
            confirmPassword: confirmPassword || existingPet.confirmPassword,
        };

        const updatedPet = new Pet(updatedPetData, updatedPetData.id);

        await this.petsRepo.updatePet(updatedPet.toJson(), id);
    }
}