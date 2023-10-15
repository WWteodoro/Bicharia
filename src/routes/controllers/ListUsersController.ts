import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class ListUsersController {
    constructor(private userRepo: IUserRepository){}
    async handle(_: Request, res: Response): Promise<Response> {
     const users = await this.userRepo.findAll()
     return res.json(users)
    }
}

