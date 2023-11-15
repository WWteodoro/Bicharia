import { IPets } from "../interfaces/IPetsInterfaces";
import { IPetsRepository } from "../interfaces/IPetsRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PetsRepository implements IPetsRepository {

  async findAll(): Promise<IPets[]> {
    const result = await prisma.pet.findMany()
    return result
}

async findOnePet(id: string): Promise<IPets>{
  const result = await prisma.pet.findUnique({
      where: { id }
  })

  if(!result) throw new Error('pets not found')
  return result
}

async createPet(props: Omit<IPets, 'owners'>, owners?: string ): Promise<void> {
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