import { Request, Response, Router } from "express";
import { IPets } from "../interfaces/IPetsInterfaces";
import { PetsRepository } from "../repositories/PetRepository";
import { CreatePetController } from "./controllers/CreatePetController";
import { DeletePetByIdController } from "./controllers/DeletePetByIdController";
import { GetAllPetsController } from "./controllers/GetAllPetsController";
import { GetPetByIdController } from "./controllers/GetPetByIdController";
import { UpdatePetIdController } from "./controllers/UpdatePetIdController";
import { UpdatePetNameController } from "./controllers/UpdatePetNameController";
import { UpdatePetTypeController } from "./controllers/UpdatePetTypeController";


export const petsRoute = Router();

const petsRepo = new PetsRepository();

const createPetController = new CreatePetController(petsRepo);
const deletePetByIdController = new DeletePetByIdController(petsRepo);
const getAllPetsController = new GetAllPetsController(petsRepo);
const UpdatePetId = new UpdatePetIdController(petsRepo);
const UpdatePetName = new UpdatePetNameController(petsRepo);
const UpdatePetType = new UpdatePetTypeController(petsRepo);
const getPetByIdController = new GetPetByIdController(petsRepo);
// Rota para criar um pet
petsRoute.post('/', async (req: Request, res: Response) => {
    return await createPetController.handle(req, res);
});

// Rota para obter todos os pets
petsRoute.get('/', async (req: Request, res: Response) => {
    return await getAllPetsController.handle(req, res);
});

// Rota para obter um pet por ID
petsRoute.get('/:id', async (req: Request, res: Response) => {
    return await getPetByIdController.handle(req,res);
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
    return await deletePetByIdController.handle(req, res);
});
