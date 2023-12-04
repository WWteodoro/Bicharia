import { Request, Response, Router } from "express";
import { IPets } from "../interfaces/IPetsInterfaces";
import { UserRepository } from "../repositories/UserRepository";
import { PetsRepository } from "../repositories/PetRepository";
import { CreateUserController } from "./controllers/CreateUserController";
import { ICryptoRepository } from "../interfaces/ICryptoRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { CryptoRepository } from "../repositories/CryptoRepository";
import { CreatePetController } from "./controllers/createPetController";
import { UpdatePetController } from "./controllers/UpdatePetController";
import { DeletePetByIdController } from "./controllers/deletePetByIdController";
import { GetAllPetsController } from "./controllers/getAllPetsController";
import { GetPetByIdController } from "./controllers/getPetByIdController";
export const petsRoute = Router();

const petsRepo = new PetsRepository();
const cryptoRepo: ICryptoRepository = new CryptoRepository()
const userRepo: IUserRepository = new UserRepository(cryptoRepo);

const CreatePet = new CreatePetController(petsRepo, userRepo);
const DeletePetById = new DeletePetByIdController(petsRepo, userRepo);
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
