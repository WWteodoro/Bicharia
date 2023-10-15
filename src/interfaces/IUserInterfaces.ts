export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmEmail?: string;
    confirmPassword?: string;
    createdAt?: Date;
    updatedAt?: Date;
}