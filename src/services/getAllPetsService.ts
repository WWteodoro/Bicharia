import { IPetsRepository } from "../interfaces/petsRepository";
import { IPets } from "../interfaces/petsInterfaces";

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
