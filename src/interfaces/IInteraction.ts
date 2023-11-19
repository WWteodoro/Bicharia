import { IUser } from "./IUserInterfaces";

export interface IInteraction{
    id: string;
    reaction: string;
    user: IUser;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IInteractionCreateRequest{
    reaction: string;
    userId: string;
}

export interface IInteractionGetRequest{
    id: string;
}

export interface IInteractionGetByUsersRequest{
    userId: string;
}

export interface IInteractionDeleteRequest{
    id: string;
}

export interface IInteractionUpdateRequest{
    id: string;
    reaction: string;
}