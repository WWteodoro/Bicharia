import { IPost } from "../interfaces/IPostInterface";
import { createUUID } from "../utils/createUUID";

export class Post{
  id: IPost['id'];
  date: IPost['date'];
  photo: IPost['photo'];
  user: IPost['user'];
  userId: IPost['userId'];
  text: IPost['text'];
  createdAt?: IPost['createdAt'];
  updatedAt?: IPost['updatedAt'];

  constructor(props: Omit<IPost, 'id'>, id?:string){
    this.id = id || createUUID();
    this.date = props.date;
    this.photo = props.photo;
    this.user = props.user;
    this.userId = props.userId;
    this.text = props.text;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJson(): IPost{
    return{
        id: this.id,
        date: this.date,
        photo: this.photo,
        user: this.user,
        userId: this.userId,
        text: this.text,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
  }
}