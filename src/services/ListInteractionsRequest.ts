import { IInteraction, IInteractionGetByUsersRequest } from "../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";

export class ListInteractionsService{
    constructor(private interactionRepo: IInteractionRepository){}
    async execute({userId}: IInteractionGetByUsersRequest): Promise<IInteraction[]>{
        const interactions = await this.interactionRepo.findAll(userId)
        return interactions
    }
}