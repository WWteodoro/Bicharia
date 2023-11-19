import { IPetsRepository } from "../interfaces/IPetsRepository";
import { IPets } from "../interfaces/IPetsInterfaces";

export class GetPetByIdService {
  constructor(private petsRepo: IPetsRepository) {}

  async execute(id: string): Promise<IPets | null> {
    const pet = await this.petsRepo.findOnePet(id);
    return pet;
  }
}
