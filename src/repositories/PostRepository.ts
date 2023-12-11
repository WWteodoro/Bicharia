import { IPostRepository } from "../interfaces/IPostRepository";
import { IPost } from "../interfaces/IPostInterface";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class PostRepository implements IPostRepository{

    async findFeed(id: string): Promise<any[]> {
        console.log("0")
        let cont = 0;
        let array = [];
        const user = await prisma.user.findFirst({
            where: { id }
        })


        let result = []
        if(!user) throw new AppError("Deu pau")
        let array2 = user?.petsId
        
        while(cont < array2?.length){
            array.push(array2[cont])
            cont++;
        }

        cont = 0;
        while(cont < array.length){
            let post = await prisma.post.findMany({
                where: {petId: array[cont]}
            })

            result.push(post)
            cont ++;
            
        }


        return result

    }



   
    async findAll(userId: string): Promise<IPost[]> {
        const result = await prisma.post.findMany()
        return result;
    }

    async findOnePost(id: string): Promise<IPost> {
        const result = await prisma.post.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Playlist not found')
        return result
    }

    async insert(props: IPost): Promise<IPost> {
        const result = await prisma.post.create({
            data: props
        })

        return result

    }
    async update(props: IPost, id: string): Promise<IPost> {
        const result = await prisma.post.update({
            where: { id }, 
            data: props
        })

        return result
    }
    async delete(id: string): Promise<void> {
        await prisma.post.delete({
            where: { id }
    })
    
}

}