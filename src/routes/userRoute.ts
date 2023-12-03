import { NextFunction, Request, Response, Router, response } from "express";
import { IUser } from "../interfaces/IUserInterfaces";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { resolveController } from "../adapters/resolveController";
import { HashRepository } from "../repositories/HashRepository";
import { GetUserByEmailController } from "./controllers/GetUserByEmailController";
import { CryptoRepository } from "../repositories/CryptoRepository";
import { ListUserPetsController } from "./controllers/ListUserPetsController";
import { InviteUserByEmailController } from "./controllers/InviteUserByEmailControllers";
import { PetsRepository } from "../repositories/PetRepository";

const users: IUser[] = [];
export const userRoute = Router();


const cryptoRepo = new CryptoRepository()
const userRepo = new UserRepository(cryptoRepo);
const hashRepo = new HashRepository()
const petRepo = new PetsRepository()
const createUserController = new CreateUserController(userRepo, hashRepo)
const getUserController = new GetUserController(userRepo)
const listUsersController = new ListUsersController(userRepo)
const updateUserController = new UpdateUserController(userRepo)
const deleteUserController = new DeleteUserController(userRepo)
const getByEmailUsersController = new GetUserByEmailController(userRepo)
const listUserPetsController = new ListUserPetsController(userRepo)
const inviteUserByEmailController = new InviteUserByEmailController(userRepo, petRepo)

//criar 
userRoute.post('/', resolveController(async (req: Request, res: Response) => {
    return await createUserController.handle(req, res)
}))

//Pegar um único usuário
userRoute.get('/:id', resolveController(async (req: Request, res:Response) => {
    return await getUserController.handle(req, res)
}))

//Listar
userRoute.get('/', resolveController(async (_: Request, res: Response) => {
    return await listUsersController.handle(_,res)
}))

//Atualizar
userRoute.put('/:id', resolveController(async (req: Request, res: Response) => {
    return await updateUserController.handle(req,res)
}))

//Exclusão
userRoute.delete('/:id', resolveController(async (req: Request, res: Response) => {
    return await deleteUserController.handle(req,res)
}))

userRoute.get('/email/:email', resolveController(async (req: Request, res: Response) => {
    return await getByEmailUsersController.handle(req,res)
}))

userRoute.get('/pets/:id', resolveController(async (req: Request, res: Response) => {
    return await listUserPetsController.handle(req,res)
}))
userRoute.post('/invite/:email',resolveController(async (req: Request, res: Response) => {
    return await inviteUserByEmailController.handle(req,res)
}))