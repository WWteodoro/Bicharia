import { IUser } from "./IUserInterfaces";

export interface IPets {
    id: string;
    name: string;
    type: string;
    owners: IUser[];
    password: string;
    confirmPassword?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPetsCreateRequest{
    name: string;
    type: string;
    password: string;
    confirmPassword?: string;
    owners: IUser[];
}


export interface IPetsGetRequest {
    id: string;
}

export interface IPetsUpdateRequest{
    id: string;
    name: string;
    password: string;
    confirmPassword?: string;
}

export interface IPetsDeleteRequest{
    id: string;
}