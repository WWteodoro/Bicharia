import { IPostRepository } from "../../interfaces/IPostRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ListUserPetsService } from "../../services/ListUserPetsService";
import { Request, Response } from "express";

export class ListUserPetsController{
    constructor(private petRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params;

        const listUserPetsService = new ListUserPetsService(this.petRepo)
        const pets = await listUserPetsService.execute(userId)
        return res.json(pets)
    }
}