import { IPetsDeleteRequest } from "../interfaces/petsInterfaces";
import { IPetsRepository } from "../interfaces/petsRepository";

export class DeletePetByIdService {
  constructor(private petsRepo: IPetsRepository) {}

  async execute({ id }: IPetsDeleteRequest): Promise<void>{
    await this.petsRepo.findOnePet(id)
    await this.petsRepo.deletePetById(id)
}
}
