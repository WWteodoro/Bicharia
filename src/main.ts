import express, { Request, Response } from 'express';
import { route } from './routes';
import bodyParser from 'body-parser'

require('dotenv').config({ path: '.env'});

//criando backend através do express
const app = express();

app.use(bodyParser.json())
//backend usa rota raiz
app.use('/', route);

<<<<<<< HEAD
app.listen(3000, () =>  console.log('Funcionou :o'));
=======
//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(process.env.PORT), () => {
    console.log('Rodando tá!!!')
})
>>>>>>> 5701dbde88c812b00a687deed9c529ca66227667
