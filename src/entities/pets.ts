import { IPets } from "../interfaces/IPetsInterfaces"
import { createShortid } from "../utils/createShortid";

export class Pet{
    id: string;
    name: IPets['name'];
    type: IPets['type'];
    photo: IPets['photo'];
    createdAt: IPets['createdAt'];
    updatedAt: IPets['updatedAt'];

    constructor(props: Omit<IPets, 'id'>, id?: string){
        this.id = id || createShortid();
        this.name = props.name;
        this.type = props.type;
        this.photo = props.photo;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IPets{
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            photo: this.photo,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
                
            }
        }
    }