import { Request, Response, Router } from "express";
import { IPets } from "../interfaces/IPetsInterfaces";
import { UserRepository } from "../repositories/UserRepository";
import { PetsRepository } from "../repositories/PetRepository";
import { CreatePetController } from "./controllers/CreatePetController";
import { DeletePetByIdController } from "./controllers/DeletePetByIdController";
import { GetAllPetsController } from "./controllers/GetAllPetsController";
import { UpdatePetController } from "./controllers/UpdatePetController";
import { GetPetByIdController } from "./controllers/GetPetByIdController";
import { CreateUserController } from "./controllers/CreateUserController";
export const petsRoute = Router();

const petsRepo = new PetsRepository();
const usersRepo = new UserRepository();

const CreatePet = new CreatePetController(petsRepo, usersRepo);
const DeletePetById = new DeletePetByIdController(petsRepo);
const GetAllPets = new GetAllPetsController(petsRepo);
const UpdatePet = new UpdatePetController(petsRepo)
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

// Rota para atualizar um pet
petsRoute.put('/:id/updatePet', async (req: Request, res: Response) => {
    return await UpdatePet.handle(req, res);
});

// Rota para excluir um pet por ID
petsRoute.delete('/:id', async (req: Request, res: Response) => {
    return await DeletePetById.handle(req, res);
});
