import { IPetsRepository } from "../interfaces/petsRepository";

export class UpdatePetIdService {
    constructor(private petsRepo: IPetsRepository) {}

    async execute(id: string, newId: string) {
        try {
            // Verifica se o pet com o ID original existe
            const petExists = await this.petsRepo.getPetById(id);
    
            if (!petExists) {
                throw new Error('Pet não encontrado');
            }
    
            // Verifica se o novo ID já está em uso
            const idExistente = await this.petsRepo.getPetById(newId);
    
            if (idExistente) {
                throw new Error('O novo ID já está em uso por outro pet.');
            }
    
            // Atualiza o ID do pet
            await this.petsRepo.updatePetId(id, newId);
    
            return { message: 'Pet ID atualizado com sucesso' };
        } catch (error: any) {
            throw new Error('Erro ao atualizar o ID do pet: ' + error.message);
        }
    }
    
}
