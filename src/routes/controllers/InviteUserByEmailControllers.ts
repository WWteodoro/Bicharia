import { IUserRepository } from "../../interfaces/IUserRepository";
import { IPetsRepository } from "../../interfaces/IPetsRepository"
import { Request, Response } from "express";
import { InviteUserByEmailService } from "../../services/InviteUserByEmailService";


export class InviteUserByEmailController {
  constructor(private userRepo: IUserRepository, private petsRepo: IPetsRepository) {}

  async handle(req: Request, res: Response): Promise<void> {
    console.log('c: 1'); 
    const { email, petId } = req.params;
    console.log('c: 2'); 
    const inviteUserByEmailService = new InviteUserByEmailService(this.userRepo, this.petsRepo)
    console.log('c: 3');
    await inviteUserByEmailService.execute({ email, petId})
    console.log('c: 4');

  }
}
