import { Post } from "../entities/post";
import { IPostCreateRequest } from "../interfaces/IPostInterface";
import { IPostRepository } from "../interfaces/IPostRepository";

export class CreatePostService{
    constructor(private postRepo: IPostRepository){}
    async execute({photo, userId, text, petId}: IPostCreateRequest): Promise<void>{
        const post = new Post({photo, userId, text, petId})
        await this.postRepo.insert(post.toJson())
    }
}