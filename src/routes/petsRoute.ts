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

// Excluir um pet por ID
petsRoute.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const index = listaDePets.findIndex(pet => pet.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Pet não encontrado' });
    }

    // Remove o pet da lista
    listaDePets.splice(index, 1);

    res.json({ message: 'Pet excluído com sucesso' });
});

// Listar todos os pets
petsRoute.get('/', (_, res: Response) => {
    res.json(listaDePets);
});

// Atualizar o nome de um pet
petsRoute.put('/updateName/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { newName } = req.body;

    try {
        const petAtualizado = updatePetName(id, newName);
        if (petAtualizado) {
            res.json(petAtualizado);
        } else {
            res.status(404).json({ error: 'Pet não encontrado' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar o tipo de um pet
petsRoute.put('/updateType/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { newType } = req.body;

    try {
        const petAtualizado = updatePetType(id, newType);
        if (petAtualizado) {
            res.json(petAtualizado);
        } else {
            res.status(404).json({ error: 'Pet não encontrado' });
        }
    } catch (error:any ) {
        res.status(400).json({ error: error.message });
    }
});

//Atualizar o id de um pet
petsRoute.put('/updateId/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { newId } = req.body;

    try {
        const petAtualizado = updatePetId(id, newId);
        if (petAtualizado) {
            res.json(petAtualizado);
        } else {
            res.status(404).json({ error: 'Pet não encontrado' });
        }
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
});

// Função para atualizar o nome de um pet
function updatePetName(id: string, newName: string): IPets | undefined {
    const petIndex = listaDePets.findIndex(pet => pet.id === id);

    if (petIndex !== -1) {
        listaDePets[petIndex].name = newName;
        return listaDePets[petIndex];
    }

    return undefined;
}

// Função para atualizar o tipo de um pet
function updatePetType(id: string, newType: string): IPets | undefined {
    const petIndex = listaDePets.findIndex(pet => pet.id === id);

    if (petIndex !== -1) {
        const tiposValidos = ['gato', 'cachorro', 'pássaro', 'outros'];

        if (tiposValidos.includes(newType)) {
            listaDePets[petIndex].type = newType;
            return listaDePets[petIndex];
        }
    }

    return undefined;
}
//Funcao para atualizar o id de um pet
function updatePetId(id: string, newId: string): IPets | null {
    // Verifica se o novo ID já está em uso
    const idAlreadyExists = listaDePets.some(pet => pet.id === newId);
    if (idAlreadyExists) {
        throw new Error('O novo ID já está em uso por outro pet.');
    }

    // Encontra o pet na lista
    const petIndex = listaDePets.findIndex(pet => pet.id === id);

    if (petIndex === -1) {
        // Retorna null se o pet não for encontrado
        return null;
    }

    // Atualiza o ID do pet
    listaDePets[petIndex].id = newId;

    // Retorna o pet atualizado
    return listaDePets[petIndex];
}

