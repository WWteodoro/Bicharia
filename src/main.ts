import express, { Request, Response } from 'express';
import { route } from './routes';
import bodyParser from 'body-parser'

require('dotenv').config({ path: '.env'});

//criando backend através do express
const app = express();

app.use(bodyParser.json())
//backend usa rota raiz
app.use('/', route);

app.listen(3000, () =>  console.log('Funcionou :o'));