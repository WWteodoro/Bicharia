import { IUserRepository } from "../interfaces/IUserRepository";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { AppError } from "../errors/AppError";
import { IPetsUpdateRequest } from "../interfaces/IPetsInterfaces";
import { IPets } from "../interfaces/IPetsInterfaces";
import { PrismaClient } from "@prisma/client";
import { IUserInviteByEmail } from "../interfaces/IUserInterfaces";

const prisma = new PrismaClient();

export class InviteUserByEmailService {
  constructor(private userRepo: IUserRepository, private petsRepo: IPetsRepository) {}

  async execute({email, petId}: IUserInviteByEmail): Promise<void> {
   
      let User = await this.userRepo.findUserByEmail(email);
   
      if (!User) {
        throw new AppError('Usuário não encontrado');
      }

      const id = petId;
      console.log("1")
      //const Pet = await this.petsRepo.findOnePet(petId);
      const Pet = await prisma.pet.findFirst({
        where: { id }
      })
      console.log("2")
      if(Pet){
      User.petsId?.push(Pet.id)
      console.log("3")
        await prisma.user.update({
        where: {email},
        data: { id: User.id, name: User.name, email: User.email, password: User.password, petsId: User.petsId }
      })
      console.log("4")
    }
      else throw new AppError('Pet not found')
      
      
}}
