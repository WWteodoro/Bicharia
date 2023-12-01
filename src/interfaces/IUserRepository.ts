import { IPets } from "./IPetsInterfaces";
import { IUser, IUserPet } from "./IUserInterfaces";

export interface IUserRepository{
    findAll(): Promise<IUser[]>
    findOneUser(id: string): Promise<IUser>
    insert(props: IUser): Promise<void>
    update(props: IUser, id: string): Promise<void>
    delete(id: string): Promise<void>
    findUserByEmail(email: string): Promise<IUser>
    findPets(id: string): Promise<string[]>
    receivePet(id: string, petId: string): Promise<void>
}