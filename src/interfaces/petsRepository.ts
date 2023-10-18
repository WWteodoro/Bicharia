import { IPets } from "./petsInterfaces";

export interface IPetsRepository {
    findAll(): Promise<IPets[]>;
    findOnePet(id: string): Promise<IPets>; 
    createPet(props: IPets):  Promise<void>
    updatePetName(id: string, newName: string): Promise<IPets>; 
    updatePetType(id: string, newType: string): Promise<IPets>; 
    updatePetId(id: string, newId: string): Promise<IPets>; 
    deletePetById(id: string): Promise<void>;
}
