import { Request, Response } from "express";
import { IPostRepository } from "../../interfaces/IPostRepository";
import { ListPostService } from "../../services/ListPostService";
import { IPostGetByUserRequest } from "../../interfaces/IPostInterface";

export class ListPostsController{
    constructor(private postRepo: IPostRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params;

        const listPostsService = new ListPostService(this.postRepo)
        const posts = await listPostsService.execute({userId})
        return res.json(posts)
    }
}