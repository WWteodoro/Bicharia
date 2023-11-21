import { Interaction } from "../entities/interaction";
import { IInteractionCreateRequest } from "../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";

export class CreateInteractionService {
    constructor(private interactionRepo: IInteractionRepository){}
    async execute({ reaction, userId}: IInteractionCreateRequest): Promise<void>{
        const interaction = new Interaction({reaction, userId})
        await this.interactionRepo.insert(interaction.toJson())
    }
}