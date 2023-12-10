import { IFeedRequest } from "../interfaces/IPostInterface";
import { IPostRepository } from "../interfaces/IPostRepository";
import { IUserRepository } from "../interfaces/IUserRepository";

export class FindFeedService{
    constructor(private postRepo: IPostRepository){}
    async execute({userId}: IFeedRequest): Promise<any[]>{
        const result = await this.postRepo.findFeed(userId)
        return result
    }
}