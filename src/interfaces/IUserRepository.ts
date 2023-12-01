import { IUser } from "./IUserInterfaces";

export interface IUserRepository{
    findAll(): Promise<IUser[]>
    findOneUser(id: string): Promise<IUser>
    insert(props: IUser): Promise<void>
    update(props: IUser, id: string): Promise<void>
    delete(id: string): Promise<void>
    findUserByEmail(email: IUser["email"]): Promise<IUser>
}