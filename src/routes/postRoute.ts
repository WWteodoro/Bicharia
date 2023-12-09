import { NextFunction, Request, Response, Router, response } from "express";
import { PostRepository } from "../repositories/PostRepository";
import { CreatePostController } from "./controllers/CreatePostController";
import { GetPostController } from "./controllers/GetPostController";
import { ListPostsController } from "./controllers/ListPostsController";
import { DeletePostController } from "./controllers/DeletePostController";
import { resolveController } from "../adapters/resolveController";
import { IPostGetByUserRequest } from "../interfaces/IPostInterface";
import { FindFeedController } from "./controllers/FindFeedController";

export const postRoute = Router();

const postRepo = new PostRepository;
const createPostController = new CreatePostController(postRepo)
const getPostController = new GetPostController(postRepo)
const listPostController = new ListPostsController(postRepo)
const deletePostController = new DeletePostController(postRepo)
const findFeedController = new FindFeedController(postRepo)

postRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createPostController.handle(req,res)
}))

postRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getPostController.handle(req,res)
}))

postRoute.get('/:id', resolveController(async(_: Request, res: Response) => {
    return await listPostController.handle(_,res)
}))

postRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deletePostController.handle(req,res)
}))

postRoute.get('/feed/:id', resolveController(async(req: Request, res: Response) => {
    return await findFeedController.handle(req,res)
}))