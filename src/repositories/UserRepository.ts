import { ICryptoRepository } from "../interfaces/ICryptoRepository";
import { IUser } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class UserRepository implements IUserRepository{
    constructor(
        private cryptoRepo: ICryptoRepository,
      ) {}
    async findAll(): Promise<IUser[]> {
        const result = await prisma.user.findMany()
        return result
    }

    async insert(props: IUser): Promise<void> {
        await prisma.user.create({
            data: props
        })
    }

    async findOneUser(id: string): Promise<IUser>{
        const result = await prisma.user.findUnique({
            where: { id }
        })

        if(!result) throw new Error('User not found')
        return result
    }

    async update(props: IUser, id: string): Promise<void> {
        await prisma.user.update({
            where: { id },
            data: props
        })
    }

    async delete(id: string): Promise<void>{
        await prisma.user.delete({
            where: { id }
        })
    }

    async findUserByEmail(email: IUser['email']): Promise<IUser | null> {
        email = await this.cryptoRepo.encrypt(email);
        let result = await prisma.user.findFirst({
          where: { email },
        });
        if(result) result = { ...result, ...await this.cryptoRepo.useDecryptoUser(result) };
        // Verificar uma maneira melho de implementar porque o primeiro caso sempre é null
        // if (!result !== null || result !== null) throw new Error('User not found');
        return result || null;
      }
    
}