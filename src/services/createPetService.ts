import { IPetsCreateRequest } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { validatePassword, validateConfirmPassword } from "../utils/validate";
import { AppError } from "../errors/AppError";
import { Pet } from "../entities/pets";
import { IUserRepository } from "../interfaces/IUserRepository";
import shortid from 'shortid';
import { IUserCreateRequest } from "../interfaces/IUserInterfaces";
import { PrismaClient } from "@prisma/client";
import { createUUID } from "../utils/createUUID";

const prisma = new PrismaClient();

export class CreatePetService {
    constructor(private petsRepo: IPetsRepository, private userRepo: IUserRepository) {}
    async execute({ name, type, password, confirmPassword, photo, owners, userId}: IPetsCreateRequest): Promise<void> {
        
        if (!validatePassword(password)) {
            throw new AppError('A senha não atende aos requisitos');
        }

        if (confirmPassword && !validateConfirmPassword(confirmPassword, password)) {
            throw new AppError('A confirmação de senha não é igual à senha');
        }

        const id = userId
         

        let user = await prisma.user.findFirst({
            where: { id }

        })
        
        
        if(!user ) throw new AppError('User not found')
        
       
        const novoPet = new Pet({
            name,
            type,
            password,
            photo, 
        });
        

        await this.petsRepo.createPet(novoPet.toJson());

        user?.petsId.push(novoPet.id)

        await prisma.user.update({
            where:  {id: user.id} ,
            data: {id: user.id, name: user.name, email: user.email, password: user.password, petsId: user.petsId }
        })
    }
}