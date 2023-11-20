import { Request, Response } from "express";
import { IPostRepository } from "../../interfaces/IPostRepository";
import { GetPostService } from "../../services/GetPostService";

export class GetPostController{
    constructor(private postRepo: IPostRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const{ id } = req.params;

        const getPostService = new GetPostService(this.postRepo)
        const result = await getPostService.execute({ id })

        res.json(result)

        return res.status(201).send()
    }
}