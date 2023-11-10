import { IPets } from "../interfaces/IPetsInterfaces"
import { createShortid } from "../utils/createShortid";

export class Pet{
    id: string;
    name: IPets['name'];
    type: IPets['type'];
    password: IPets['password'];
    confirmPassword: IPets['confirmPassword'];
    createdAt: IPets['createdAt'];
    updatedAt: IPets['updatedAt'];

    constructor(props: Omit<IPets, 'id'>, id?: string){
        this.id = id || createShortid();
        this.name = props.name;
        this.type = props.type;
        this.password = props.password;
        this.confirmPassword = props.confirmPassword;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IPets{
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            password: this.password,
            confirmPassword: this.confirmPassword,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
                
            }
        }
    }