import { Request, Response, Router } from "express";
import { IPets } from "../interfaces/petsInterfaces";
import { PetsRepository } from "../repositories/petRepository";
import { CreatePetController } from "../controllers/createPetController";
import { DeletePetByIdController } from "../controllers/deletePetByIdController";
import { GetAllPetsController } from "../controllers/getAllPetsController";
import { UpdatePetIdController } from "../controllers/updatePetIdController";
import { UpdatePetNameController } from "../controllers/updatePetNameController";
import { UpdatePetTypeController } from "../controllers/updatePetTypeController";
import { GetPetByIdController } from "../controllers/getPetByIdController";
export const petsRoute = Router();

const petsRepo = new PetsRepository();

const CreatePet = new CreatePetController(petsRepo);
const DeletePetById = new DeletePetByIdController(petsRepo);
const GetAllPets = new GetAllPetsController(petsRepo);
const UpdatePetId = new UpdatePetIdController(petsRepo);
const UpdatePetName = new UpdatePetNameController(petsRepo);
const UpdatePetType = new UpdatePetTypeController(petsRepo);
const GetPetbyId = new GetPetByIdController(petsRepo);
// Rota para criar um pet
petsRoute.post('/', async (req: Request, res: Response) => {
    return await CreatePet.handle(req, res);
});

// Rota para obter todos os pets
petsRoute.get('/', async (req: Request, res: Response) => {
    return await GetAllPets.handle(req, res);
});

// Rota para obter um pet por ID
petsRoute.get('/:id', async (req: Request, res: Response) => {
    return await GetPetbyId.handle(req,res);
});

// Rota para atualizar o ID de um pet
petsRoute.put('/:id/update-id', async (req: Request, res: Response) => {
    return await UpdatePetId.handle(req, res);
});

// Rota para atualizar o nome de um pet
petsRoute.put('/:id/update-name', async (req: Request, res: Response) => {
    return await UpdatePetName.handle(req, res);
});

// Rota para atualizar o tipo de um pet
petsRoute.put('/:id/update-type', async (req: Request, res: Response) => {
    return await UpdatePetType.handle(req, res);
});

// Rota para excluir um pet por ID
petsRoute.delete('/:id', async (req: Request, res: Response) => {
    return await DeletePetById.handle(req, res);
});
