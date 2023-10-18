import { User } from "../entities/user";
import { IUser, IUserCreateRequest, IUserDeleteRequest, IUserGetRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { validateEmail, validatePassword, validateConfirmEmail, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";

export class DeleteUserService{
    constructor(private userRepo: IUserRepository){}

    async execute({ id }: IUserDeleteRequest): Promise<void>{
        await this.userRepo.findOneUser(id)
        await this.userRepo.delete(id)
    }
}