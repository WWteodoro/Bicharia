import { IPetsDeleteRequest } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { IUserDeleteRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeletePetByIdService {
  constructor(private petsRepo: IPetsRepository, private userRepo : IUserRepository) {}

  async execute({ id }: IPetsDeleteRequest): Promise<void>{
    await this.petsRepo.findOnePet(id)
    await this.petsRepo.deletePetById(id)
    
    const array = await prisma.user.findMany()

    let i = 0, p = 0, chave = 0;

    while(i < array.length){
      p = 0;
      while(p < array[i].petsId.length){
        if(array[i].petsId[p] === id){
          let cont = p;
          chave++;
          while(cont < array[i].petsId.length){
            if(cont === array[i].petsId.length){
              delete array[i].petsId[p];
              array[i].petsId.splice(p, 1);
            }
            //array[i].petsId[p] = array[i].petsId[p + 1];
            cont++;
          }
          if(chave > 0){
             //atualiza o user nessa linha array i
            await prisma.user.update({
              where : {id: array[i].id},
              data: {id: array[i].id, name: array[i].name, email: array[i].email, password: array[i].password, petsId: array[i].petsId }
            })
             chave = 0;
          }

         
        }
        p++;
      }
      i++;
    }

}
}
