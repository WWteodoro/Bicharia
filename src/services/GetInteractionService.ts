import { IInteraction, IInteractionGetRequest } from "../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";

export class GetInteractionService{
    constructor(private interactionRepo: IInteractionRepository){}
    async execute({id}: IInteractionGetRequest): Promise<IInteraction>{
        const result = await this.interactionRepo.findOneInteraction(id)
        return result
    }
}