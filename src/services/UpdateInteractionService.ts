import { Interaction } from "../entities/interaction";
import { IInteractionUpdateRequest } from "../interfaces/IInteractionInterface";
import { IInteractionRepository } from "../interfaces/IInteractionRepository";

export class UpdateInteractionService{
    constructor(private interactionRepo: IInteractionRepository){}
    async execute({ reaction, id}: IInteractionUpdateRequest): Promise<void>{
        const result = await this.interactionRepo.findOneInteraction(id)

        const interaction = new Interaction({
            reaction: reaction || result.reaction,
            userId: result.userId
        })

        await this.interactionRepo.update(interaction.toJson(), id)
    }
}