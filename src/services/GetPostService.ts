import { IPost, IPostGetRequest } from "../interfaces/IPostInterface";
import { IPostRepository } from "../interfaces/IPostRepository";

export class GetPostService{
    constructor(private postRepo: IPostRepository){}
    async execute({ id }: IPostGetRequest): Promise<IPost>{
        const result = await this.postRepo.findOnePost(id)
        return result
    }
}