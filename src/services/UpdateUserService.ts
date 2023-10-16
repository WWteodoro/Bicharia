import { User } from "../entities/user";
import { IUser, IUserCreateRequest, IUserGetRequest, IUserUpdateRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail, validatePassword, validateConfirmEmail, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";

export class UpdateUserService{
    constructor(private userRepo: IUserRepository){}
    async execute({ id, name, email, password, confirmEmail, confirmPassword }: IUserUpdateRequest): Promise<void>{
        const result = await this.userRepo.findOneUser(id)
    
        if ( email && !validateEmail(email)){
            throw new AppError('Email inválido')
        }
    
        if(password && !validatePassword(password)){
            throw new AppError('Senha não atende os requisitos')
        }
        if(confirmPassword && !validateConfirmPassword(confirmPassword, password)){
            throw new AppError('Email ou senha não são iguais')
        }
    
        if(confirmEmail && !validateConfirmEmail(confirmEmail, email)){
            throw new AppError('Email ou senha não são iguais')
        }
    
        const user = new User({
            name: name || result.name,
            email: email || result.email,
            password: password || result.password,
            confirmEmail: confirmEmail || result.confirmEmail,
            confirmPassword: result.confirmPassword
        }, result.id)
        
        await this.userRepo.update(user.toJson(), id)
    
    }
}