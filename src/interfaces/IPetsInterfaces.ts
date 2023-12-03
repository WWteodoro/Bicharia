import { IUser } from "./IUserInterfaces";

export interface IPets {
    id: string;
    name: string;
    type: string;
    password: string;
    confirmPassword?: string;
    photo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPetsCreateRequest{
    name: string;
    type: string;
    password: string;
    confirmPassword?: string;
    photo: string;
    owners?: IUser[];
    userId: string; 
}


export interface IPetsGetRequest {
    id: string;
}

export interface IPetsUpdateRequest{
    id: string;
    newId?: string;
    type: string;
    name: string;
    password: string;
    confirmPassword?: string;
    photo: string;
}

export interface IPetsDeleteRequest{
    id: string;
}

export interface IPetsOwners{
    owners: IUser[];
    id: string;
}