import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { User } from "../../entities/user";
import { validateEmail, validatePassword, validateConfirmPassword, validateConfirmEmail } from "../../utils/validate";

export class UpdateUserController {
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const{ name, email, password, confirmEmail, confirmPassword} = req.body;
    
        const result = await this.userRepo.findOneUser(id)
    
        if ( email && !validateEmail(email)){
            res.status(400).json({
                message: "Email inválido"
            })
        }
    
        if(password && !validatePassword(password)){
            res.status(400).json({
                message: "A senha não atende os requisitos"
            })
        }    
    
        if(confirmPassword && !validateConfirmPassword(confirmPassword, password)){
            res.status(400).json({
                message: "Email ou senha não são iguais"
            })
        }
    
        if(confirmEmail && !validateConfirmEmail(confirmEmail, email)){
            res.status(400).json({
                message: "Email ou senha não são iguais"
            })
        }
    
        const user = new User({
            name: name || result.name,
            email: email || result.email,
            password: password || result.password,
            confirmEmail: confirmEmail || result.confirmEmail,
            confirmPassword: result.confirmPassword
        }, result.id)
        
        await this.userRepo.update(user.toJson(), id)
    
        return res.status(201).json()}
}

