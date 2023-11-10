import { IPetsRepository } from "../interfaces/IPetsRepository";
import { AppError } from "../errors/AppError";

export class UpdatePetTypeService {
    constructor(private petsRepo: IPetsRepository) {}

    async execute(id: string, newType: string) {
        try {
            if (!newType) {
                throw new AppError('O novo tipo do pet é obrigatório');
            }

            // Verifica se o pet existe
            const pet = await this.petsRepo.findOnePet(id);
            
            if (!pet) {
                return null;
            }

            // Atualiza o tipo do pet
            await this.petsRepo.updatePetType(id, newType);

            return { message: 'Tipo do pet atualizado com sucesso' };
        } catch (error: any) {
            throw new Error('Erro ao atualizar o tipo do pet: ' + error.message);
        }
    }
}
