import { IPetsRepository } from "../interfaces/IPetsRepository";
import { AppError } from "../errors/AppError";

export class UpdatePetNameService {
    constructor(private petsRepo: IPetsRepository) {}

    async execute(id: string, newName: string) {
        try {
            if (!newName) {
                throw new AppError('O novo nome do pet é obrigatório');
            }

            // Verifica se o pet existe
            const pet = await this.petsRepo.findOnePet(id);
            
            if (!pet) {
                return null;
            }

            // Atualiza o nome do pet
            await this.petsRepo.updatePetName(id, newName);

            return { message: 'Nome do pet atualizado com sucesso' };
        } catch (error: any) {
            throw new Error('Erro ao atualizar o nome do pet: ' + error.message);
        }
    }
}
