// deletePetByIdController.ts
import { Request, Response } from "express";
import { IPetsRepository } from "../interfaces/petsRepository";
import { DeletePetByIdService } from "../services/deletePetByIdService";

export class DeletePetByIdController {
  constructor(private petsRepo: IPetsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

  
    const deletePetsService = new DeletePetByIdService(this.petsRepo)
    await deletePetsService.execute({ id })

    return res.status(200).send()

  }
}
