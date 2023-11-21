import { Request, Response } from "express";
import { IPostRepository } from "../../interfaces/IPostRepository";
import { DeletePostService } from "../../services/DeletePostService";

export class DeletePostController{
    constructor(private postRepo: IPostRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deletePostService = new DeletePostService(this.postRepo)
        await deletePostService.execute({ id })

        return res.status(200)
    }
}