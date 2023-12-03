import { IUser } from "../interfaces/IUserInterfaces";
import { createUUID } from "../utils/createUUID";

export class User{
    id: string;
    name: IUser['name'];
    email: IUser['email'];
    password: IUser['password'];
    confirmEmail: IUser['confirmEmail'];
    confirmPassword: IUser['confirmPassword'];
    petsId: IUser['petsId'];
    createdAt: IUser['createdAt'];
    updatedAt: IUser['updatedAt'];

    constructor(props: Omit<IUser, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.confirmEmail = props.confirmEmail;
        this.confirmPassword = props.confirmPassword;
        this.petsId = props.petsId;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IUser{
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            confirmEmail: this.confirmEmail,
            confirmPassword: this.confirmPassword,
            petsId: this.petsId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
                
            }
        }
    }