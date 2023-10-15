import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class GetUserController {
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

    const result = await this.userRepo.findOneUser(id)

    return res.json(result)
    }
}

