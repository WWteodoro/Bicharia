import { IPostGetRequest } from "../interfaces/IPostInterface";
import { IPostRepository } from "../interfaces/IPostRepository";

export class DeletePostService{
    constructor(private postRepo: IPostRepository){}
    async execute({id}: IPostGetRequest): Promise<void>{
        await this.postRepo.findOnePost(id)
        await this.postRepo.delete(id)
    }
}