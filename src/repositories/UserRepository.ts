import { IUser } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class UserRepository implements IUserRepository{
    async findAll(): Promise<IUser[]> {
        const result = await prisma.user.findMany()
        return result
    }

    async insert(props: IUser): Promise<void> {
        await prisma.user.create({
            data: props
        })
    }
    
}