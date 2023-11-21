import { IPostRepository } from "../interfaces/IPostRepository";
import { IPost } from "../interfaces/IPostInterface";
import { PrismaClient } from "@prisma/client";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";
import { IInteraction } from "../interfaces/IInteractionInterface";

const prisma = new PrismaClient();

export class InteractionRepository implements IInteractionRepository{
    async findAll(userId: string): Promise<IInteraction[]> {
       const result = await prisma.interation.findMany()
       return result;
    }

    async findOneInteraction(id: string): Promise<IInteraction> {
        const result = await prisma.interation.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Interaction not found')
        return result
    }

    async insert(props: IInteraction): Promise<IInteraction> {
        const result = await prisma.interation.create({
            data: props
        })

        if(!result) throw new Error('Playlist not found')
        return result
    }

    async update(props: IInteraction, id: string): Promise<IInteraction> {
        const result = await prisma.interation.update({
            where: { id }, 
            data: props
        })

        if(!result) throw new Error('Playlist not found')
        return result
    }

    async delete(id: string): Promise<void> {
        await prisma.interation.delete({
            where: { id }
        })
    }
    
}