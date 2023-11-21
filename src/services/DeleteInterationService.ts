import { IInteractionGetRequest } from "../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";

export class DeleteInteractionService{
    constructor(private interactionRepo: IInteractionRepository){}
    async execute({id}: IInteractionGetRequest): Promise<void>
{
    await this.interactionRepo.findOneInteraction(id)
    await this.interactionRepo.delete(id)
}}