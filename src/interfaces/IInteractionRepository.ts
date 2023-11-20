import { IInteraction } from "./IInteractionInterface";

export interface IInteractionRepository{
    findAll(userId: string): Promise<IInteraction[]>
    findOneInteraction(id: string): Promise<IInteraction>
    insert(props: IInteraction): Promise<IInteraction>
    update(props: IInteraction, id: string): Promise<IInteraction>
    delete(id: string): Promise<void>
}