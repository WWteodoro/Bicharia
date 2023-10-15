import { Request, Response, Router } from "express";
import { IPets } from "../interfaces/petsInterfaces";
import { createUUID } from "../utils/createShortid";

const listaDePets: IPets[] = [];

export const petsRoute = Router();

// Criar um novo pet
petsRoute.post('/', (req: Request, res: Response) => {
    const { name, type, password, confirmPassword, birthdate } = req.body;


    const tiposValidos = ['gato', 'cachorro', 'pássaro', 'outros']; // Adicione todos os tipos válidos aqui
    if (!tiposValidos.includes(type)) {
      return res.status(400).json({ error: 'Tipo de animal inválido' });
    }

    let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
     
    if(!regexPassword.test(password)){
        res.status(400).json({
            message: "A senha não atende os requisitos"
        })
    }

    if(password != confirmPassword){
        res.status(400).json({
            message: "Email ou senha não são iguais"
        })
    }


    const novoPet: IPets = { 
        id: createUUID(), 
        name,
        type,
        password,
        confirmPassword,
        birthdate
    }
    
    listaDePets.push(novoPet);
    
    res.json(novoPet);
});

// Pegar um único pet por ID
petsRoute.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const result = listaDePets.find(pet => pet.id === id);

    if (!result) {
        return res.status(404).json({ error: 'Pet não encontrado' });
    }

    res.json(result);
});

// Listar todos os pets
petsRoute.get('/', (_, res: Response) => {
    res.json(listaDePets);
});
