import { Request, Response, Router, response } from "express";
import { IUser } from "../interfaces/IUserInterfaces";
import { isFuture } from 'date-fns'
import { createUUID } from "../utils/createUUID";
import { validateBirthDate, validateConfirmEmail, validateConfirmPassword, validateEmail, validatePassword } from "../utils/validate";
import { User } from "../entities/user";
import { UserRepository } from "../repositories/UserRepository";

const users: IUser[] = [];
export const userRoute = Router();

const userRepo = new UserRepository()

//criar 
userRoute.post('/', async (req: Request, res: Response) => {
    const { id, name, email, password, confirmPassword, confirmEmail} = req.body;

    if (!validateEmail(email)){
        res.status(400).json({
            message: "Email inválido"
        })
    }

    let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
     
    if(!validatePassword(password)){
        res.status(400).json({
            message: "A senha não atende os requisitos"
        })
    }


    if(!validateConfirmEmail){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    if(!validateConfirmPassword){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    const user = new User({name, email, password, confirmPassword, confirmEmail})
    await userRepo.insert(user.toJson())
    
    
    res.status(201).send()
})

//Pegar um único usuário
userRoute.get('/:id', (req: Request, res:Response) => {
    const { id } = req.params;

    const result = users.filter(user => {
       if(user.id === id) {
        return user
       }
    } )[0]

    res.json(result)
})

//Listar
userRoute.get('/', async (_, res: Response) => {
    const users = await userRepo.findAll()
    res.json(users)
})

//Atualizar
userRoute.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const{ name, email, password, confirmEmail, confirmPassword} = req.body;

    const result = users.filter(user => user.id === id)[0]

    if(!result){
        res.status(400).json({
            message: "Usuário não encontrado"
        })
    }

    if ( email && !validateEmail(email)){
        res.status(400).json({
            message: "Email inválido"
        })
    }

    if(password && !validatePassword(password)){
        res.status(400).json({
            message: "A senha não atende os requisitos"
        })
    }    

    if(confirmPassword && !validateConfirmPassword(confirmPassword, password)){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    if(confirmEmail && !validateConfirmEmail(confirmEmail, email)){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }

    const user = new User({
        name: name || result.name,
        email: email || result.email,
        password: password || result.password,
        confirmEmail: confirmEmail || result.confirmEmail,
        confirmPassword: result.confirmPassword
    }, result.id)
    
    const userIndex = users.findIndex(user => user.id === id)
    users[userIndex] = user;

    res.status(201).json()
})

//Exclusão
userRoute.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const newUsers = users.filter(user => user.id !== id)
    users.splice(0)

    users.push(...newUsers)

    res.json(users)
})
