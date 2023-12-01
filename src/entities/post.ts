import { IPost } from "../interfaces/IPostInterface";
import { createUUID } from "../utils/createUUID";

export class Post{
  id: IPost['id'];
  dated: IPost['date'];
  photo: IPost['photo'];
  userId: IPost['userId'];
  petId: IPost['petId']
  text: IPost['text'];
  createdAt?: IPost['createdAt'];
  updatedAt?: IPost['updatedAt'];

  constructor(props: Omit<IPost, 'id'>, id?:string){
    this.id = id || createUUID();
    this.dated =  props.date
    this.photo = props.photo;
    this.userId = props.userId;
    this.text = props.text;
    this.petId = props.petId;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJson(): IPost{
    return{
        id: this.id,
        date: this.dated,
        photo: this.photo,
        userId: this.userId,
        petId: this.petId,
        text: this.text,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
  }
}