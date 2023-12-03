import { IPets } from "./IPetsInterfaces";
import { IUser } from "./IUserInterfaces";

export interface IUserRepository{
    findAll(): Promise<IUser[]>
    findOneUser(id: string): Promise<IUser>
    insert(props: IUser): Promise<void>
    update(props: IUser, id: string): Promise<void>
    delete(id: string): Promise<void>
    findUserByEmail(email: string): Promise<IUser>
    listUserPets(email: string): Promise<string[]>
    inviteUserByEmail(id:string, idPet: string): Promise<void>
}