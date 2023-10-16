import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { User } from "../../entities/user";
import { validateEmail, validatePassword, validateConfirmPassword, validateConfirmEmail } from "../../utils/validate";
import { UpdateUserService } from "../../services/UpdateUserService";

export class UpdateUserController {
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const{ name, email, password, confirmEmail, confirmPassword} = req.body;
    
       const updateUserService = new UpdateUserService(this.userRepo)
       await updateUserService.execute({ id, name, email, password, confirmEmail, confirmPassword})
    
        return res.status(201).json()}
}

