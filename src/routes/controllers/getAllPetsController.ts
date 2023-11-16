import { Request, Response } from "express";
import { IPetsRepository } from "../../interfaces/IPetsRepository";
import { GetAllPetsService } from "../../services/getAllPetsService";

export class GetAllPetsController {
  constructor(private petsRepo: IPetsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const getAllPetsService = new GetAllPetsService(this.petsRepo);
      const pets = await getAllPetsService.execute();

      return res.json(pets);
    } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao obter a lista de pets' });
    }
  }
}
