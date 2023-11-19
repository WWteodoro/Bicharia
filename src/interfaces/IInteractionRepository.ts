import { IInteraction } from "./IInteraction";

export interface IInteractionRepository{
    findAll(userId: string): Promise<IInteraction[]>
    findOneInteraction(id: string): Promise<IInteraction>
    insert(props: IInteraction): Promise<IInteraction>
    update(props: IInteraction): Promise<IInteraction>
    delete(id: string): Promise<void>
}