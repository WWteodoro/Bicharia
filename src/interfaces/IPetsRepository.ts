import { IPets } from "../interfaces/IPetsInterfaces"

export interface IPetsRepository {
    findAll(): Promise<IPets[]>;
    findOnePet(id: string): Promise<IPets>; 
    createPet(props: IPets):  Promise<void>
    deletePetById(id: string): Promise<void>;
    updatePet(props: IPets, id: string): Promise<void>
}
