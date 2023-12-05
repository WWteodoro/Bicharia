import { AppError } from "../errors/AppError";
import { IPets, IPetsOwners } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/IUserInterfaces";

const prisma = new PrismaClient();

export class PetsRepository implements IPetsRepository {
   
  async findAll(): Promise<IPets[]> {
    const result = await prisma.pet.findMany({
      include: {
        owners: true,
      },
    });
    return result;
  }


async findOnePet(id: string): Promise<IPets>{
  const result = await prisma.pet.findUnique({
      where: { id }
  })

  if(!result) throw new Error('pets not found')
  return result
}

async createPet(props: IPets ): Promise<void> {
    await prisma.pet.create({
      data: props
  })
}


  async getPetById(id: string) {
    return await prisma.pet.findUnique({
      where: { id },
    });
  }

  async deletePetById(id: string): Promise<void> {
    await prisma.pet.delete({
      where: { id }
  })
  }

  async getAllPets() {
    return await prisma.pet.findMany();
  }

  async updatePet(props: Omit<IPets, 'owners'> , id: string): Promise<void> {
    await prisma.pet.update({
        where: { id },
        data: props
    })
}
}