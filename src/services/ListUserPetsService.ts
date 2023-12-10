import { IUserDeleteRequest, IUserGetByEmailRequest } from "../interfaces/IUserInterfaces"
import { IUserRepository } from "../interfaces/IUserRepository"

export class ListUserPetsService{
    constructor(private userRepo: IUserRepository){}
    async execute({id}: IUserDeleteRequest): Promise<string[]>{
        const result = await this.userRepo.listUserPets(id)
        return result
    }
}