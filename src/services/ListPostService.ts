import { IPost, IPostGetByUserRequest } from "../interfaces/IPostInterface";
import { IPostRepository } from "../interfaces/IPostRepository";

export class ListPostService{
    constructor(private postRepo: IPostRepository){}
        async execute({userId}: IPostGetByUserRequest): Promise<IPost[]>{
            const posts = await this.postRepo.findAll(userId)
            return posts
        }
    }
