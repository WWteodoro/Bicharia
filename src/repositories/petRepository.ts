import { IPets } from "../interfaces/petsInterfaces";
import { IPetsRepository } from "../interfaces/petsRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PetsRepository {
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

  async createPet(props: IPets) {
    return await prisma.pet.create({
      data: props
    });
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

  async updatePetName(id: string, newName: string) {
    return await prisma.pet.update({
      where: { id },
      data: {
        name: newName,
      },
    });
  }

  async updatePetType(id: string, newType: string) {
    return await prisma.pet.update({
      where: { id },
      data: {
        type: newType,
      },
    });
  }

  async updatePetId(id: string, newId: string) {
    return await prisma.pet.update({
      where: { id },
      data: {
        id: newId,
      },
    });
  }
}