import { IPostRepository } from "../../interfaces/IPostRepository";
import { Request, Response } from "express";
import { FindFeedService } from "../../services/FindFeedService";

export class FindFeedController{
    constructor(private postRepo: IPostRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params

        const findFeedService = new FindFeedService(this.postRepo)
        const posts = await findFeedService.execute({ userId })
        return res.json(posts)
    }
}