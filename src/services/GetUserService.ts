import { User } from "../entities/user";
import { IUser, IUserCreateRequest, IUserGetRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail, validatePassword, validateConfirmEmail, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";

export class GetUserService{
    constructor(private userRepo: IUserRepository){}
    async execute({ id }: IUserGetRequest): Promise<IUser>{
        const result = await this.userRepo.findOneUser(id)
        return result
    }
}