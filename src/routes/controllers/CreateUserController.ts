import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { CreateUserService } from "../../services/CreateUserService";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class CreateUserController {
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, email, password, confirmPassword, confirmEmail} = req.body;

    const createUserService = new CreateUserService(this.userRepo, this.hashRepo)
    await createUserService.execute({name, email, password, confirmEmail, confirmPassword})
    
        return res.status(201).send()
    }
}

