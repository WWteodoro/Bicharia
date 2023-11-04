import { User } from "../entities/user";
import { IUserCreateRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail, validatePassword, validateConfirmEmail, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";
import { IHashRepository } from "../interfaces/IHashRepository";

export class CreateUserService{
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository){}
    async execute({ name, email, password, confirmEmail, confirmPassword}: IUserCreateRequest): Promise<void>{
        if (!validateEmail(email)){
            throw new AppError('Email inválido')
        }
    
        let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
         
        if(!validatePassword(password)){
            throw new AppError('A senha não atende os requisitos')
        }
    
    
        if(confirmEmail && !validateConfirmEmail(confirmEmail, email)){
            throw new AppError('Email ou senha não são iguais')
        }
    
        if(confirmPassword && !validateConfirmPassword(confirmPassword, password)){
            throw new AppError('Email ou senha não são iguais')
        } 
    
        password = await this.hashRepo.cryptographie(password);
        confirmPassword = await this.hashRepo.cryptographie(password);

        const user = new User({name, email, password})
        await this.userRepo.insert(user.toJson())
        
    }
}