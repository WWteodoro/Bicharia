import { Request, Response } from "express";
import { IPostRepository } from "../../interfaces/IPostRepository";
import { CreatePostService } from "../../services/CreatePostService";

export class CreatePostController{
    constructor(private postRepo: IPostRepository){}
    async handle(req: Request, res: Response){
        const { photo, userId, text, petId } = req.body;

        const createPostService = new CreatePostService(this.postRepo)
        await createPostService.execute({ photo, userId, text, petId})

        return res.status(200).json({})
    }
}