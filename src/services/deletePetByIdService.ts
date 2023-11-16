import { IPetsDeleteRequest } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";

export class DeletePetByIdService {
  constructor(private petsRepo: IPetsRepository) {}

  async execute({ id }: IPetsDeleteRequest): Promise<void>{
    await this.petsRepo.findOnePet(id)
    await this.petsRepo.deletePetById(id)
}
}
