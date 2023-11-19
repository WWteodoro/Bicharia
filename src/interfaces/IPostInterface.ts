import { IUser } from "./IUserInterfaces";

export interface IPost{
  id: string;
  date: Date;
  photo: string;
  text: string;
  user: IUser;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPostCreateRequest{
    photo: string;
    text: string;
    userId: string;
}

export interface IPostGetRequest{
    id: string;
}

export interface IPostGetByUserRequest{
    userId: string;
}

export interface IPostDeleteRequest{
    id:string;
}
