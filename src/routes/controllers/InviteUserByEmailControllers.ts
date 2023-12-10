import { IUserRepository } from "../../interfaces/IUserRepository";
import { IPetsRepository } from "../../interfaces/IPetsRepository"
import { Request, Response } from "express";
import { InviteUserByEmailService } from "../../services/InviteUserByEmailService";


export class InviteUserByEmailController {
  constructor(private userRepo: IUserRepository, private petsRepo: IPetsRepository) {}

  async handle(req: Request, res: Response): Promise<void> {
    
    const { email, petId } = req.params;
    const inviteUserByEmailService = new InviteUserByEmailService(this.userRepo, this.petsRepo)
    await inviteUserByEmailService.execute({ email, petId})
   

  }
}
