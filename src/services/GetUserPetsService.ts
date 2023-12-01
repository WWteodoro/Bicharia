import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IUserGetPetsRequest } from "../interfaces/IUserInterfaces";
import { IUserRepository } from "../interfaces/IUserRepository";

export class GetUserPetsService{
    
    constructor( private userRepo: IUserRepository){}
    async execute({ id }: IUserGetPetsRequest): Promise<string[]>{
        const result = await this.userRepo.findPets(id)
        return result
    }
}