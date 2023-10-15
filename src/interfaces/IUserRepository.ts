import { IUser } from "./IUserInterfaces";

export interface IUserRepository{
    findAll(): Promise<IUser[]>
    insert(props: IUser): Promise<void>
}