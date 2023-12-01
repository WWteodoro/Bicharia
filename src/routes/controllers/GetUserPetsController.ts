import { Response, Request } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { GetUserPetsService } from "../../services/GetUserPetsService";

export class GetUserPetsController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getUserPetsService = new GetUserPetsService(this.userRepo)
        const result = await getUserPetsService.execute({ id })

        return res.json(result)
    }
}