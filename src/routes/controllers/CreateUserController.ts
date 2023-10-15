import { Request, Response } from "express";
import { validateConfirmEmail, validateConfirmPassword, validateEmail, validatePassword } from "../../utils/validate";
import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class CreateUserController {
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, email, password, confirmPassword, confirmEmail} = req.body;

    if (!validateEmail(email)){
        res.status(400).json({
            message: "Email inválido"
        })
    }

    let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
     
    if(!validatePassword(password)){
        res.status(400).json({
            message: "A senha não atende os requisitos"
        })
    }


    if(!validateConfirmEmail){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    if(!validateConfirmPassword){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    const user = new User({name, email, password, confirmPassword, confirmEmail})
    await this.userRepo.insert(user.toJson())
    
    
    res.status(201).send()
        return res.status(200).json({})
    }
}

