import { IInteraction } from "../interfaces/IInteractionInterface";
import { createUUID } from "../utils/createUUID";

export class Interaction{
    id: IInteraction['id'];
    reaction: IInteraction['reaction'];
    userId: IInteraction['userId'];
    createdAt: IInteraction['createdAt'];
    updatedAt: IInteraction['updatedAt'];

    constructor(props: Omit<IInteraction, 'id'>, id?:string){
        this.id = id || createUUID();
        this.reaction = props.reaction;
        this.userId = props.userId;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IInteraction{
        return{
            id: this.id,
            reaction: this.reaction,
            userId: this.userId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}