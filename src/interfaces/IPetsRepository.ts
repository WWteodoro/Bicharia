import { IPets, IPetsOwners } from "../interfaces/IPetsInterfaces"

export interface IPetsRepository {
    findAll(): Promise<IPets[]>;
    findOnePet(petId: string): Promise<IPets>; 
    createPet(props: IPets):  Promise<void>
    deletePetById(petId: string): Promise<void>;
    updatePet(props: IPets, id: string): Promise<void>
}
