import { IPetsRepository } from "../interfaces/IPetsRepository";
import { IPets } from "../interfaces/IPetsInterfaces";

export class GetAllPetsService {
  constructor(private petsRepo: IPetsRepository) {}

  async execute(): Promise<IPets[]> {
    try {
      const pets = await this.petsRepo.findAll();
      return pets;
    } catch (error) {
      throw new Error('Erro ao obter a lista de pets');
    }
  }
}
