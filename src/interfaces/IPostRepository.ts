import { IPost } from "./IPostInterface";

export interface IPostRepository{
    findAll(userId: string): Promise<IPost[]>
    findOnePost(id: string): Promise<IPost>
    insert(props: IPost): Promise<IPost>
    update(props: IPost): Promise<IPost>
    delete(id:string): Promise<void>
}