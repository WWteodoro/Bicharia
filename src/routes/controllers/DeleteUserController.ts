import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class DeleteUserController {
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

    await this.userRepo.findOneUser(id)
    await this.userRepo.delete(id)

    return res.status(200).send()
    }
}

