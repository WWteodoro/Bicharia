import { User } from "../entities/user";
import { IUser, IUserCryptoRequest } from "../interfaces/IUserInterfaces";

export function getUserKeys() {
    let toReturn: Array<keyof IUserCryptoRequest> = [];
    type PropsArray = Array<keyof IUserCryptoRequest>;
    const propsArray: PropsArray = Object.keys(new User({} as IUser)) as PropsArray;
  
    for (const prop of propsArray) {
      if (prop === 'id' || prop === 'password' || prop === 'updatedAt' || prop === 'createdAt') continue;
      toReturn.push(prop);
    }
    return toReturn;
  }