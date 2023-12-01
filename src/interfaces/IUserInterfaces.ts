import { IPets } from "./IPetsInterfaces";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmEmail?: string;
    confirmPassword?: string;
    pets?: string[];
    postId?: string[];
    reactionId?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserCreateRequest{
    name: string;
    email: string;
    password: string;
    confirmEmail?: string;
    confirmPassword?: string;
}

export interface IUserGetRequest {
    id: string;
}

export interface IUserGetByEmailRequest{
    email: string;
}

export interface IUserUpdateRequest{
    id: string;
    name: string;
    email: string;
    password: string;
    confirmEmail?: string;
    confirmPassword?: string;
}

export interface IUserDeleteRequest{
    id: string;
}

export interface IUserAuthenticateRequest {
    email    : string;
    password : string;
}

export interface IUserCryptoRequest{
    id: string;
    name: string;
    email: string;
    password: string;
    confirmEmail?: string;
    confirmPassword?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserGetPetsRequest{
    id: string;
}