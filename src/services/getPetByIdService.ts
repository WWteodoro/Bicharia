import { IPetsRepository } from "../interfaces/petsRepository";
import { IPets } from "../interfaces/petsInterfaces";

export class GetPetByIdService {
  constructor(private petsRepo: IPetsRepository) {}

  async execute(id: string): Promise<IPets | null> {
    const pet = await this.petsRepo.findOnePet(id);
    return pet;
  }
}
