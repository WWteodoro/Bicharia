// deletePetByIdController.ts
import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { DeletePetByIdService } from "../../services/deletePetByIdService";
import { IUserRepository } from "../../interfaces/IUserRepository";


export class DeletePetByIdController {
  constructor(private petsRepo: IPetsRepository, private userRepo: IUserRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

  
    const deletePetsService = new DeletePetByIdService(this.petsRepo, this.userRepo)
    await deletePetsService.execute({ id })

    return res.status(200).send()

  }
}
