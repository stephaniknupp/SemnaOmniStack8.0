const express = require('express');
//importa a biblioteca do express é uma função que quando chamada ela cria um novo servidor(uma nova porta de entrada que se pode receber requisições e retornar respostas)

const mongoose = require('mongoose');
const cors = require('cors');

const routes= require('./routes');
//importa routes(as rotas)
//Quando se importa um arquivo criado e nao um modulo instalado precisa passar o caminho do arquivo 

const server = express();
//cria o servidor como uma constante pois nao sofrerá alterações
//ele chama a função do express

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-iorn0.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true 
});
//conecta com o mongodb

server.use(cors());
server.use(express.json());
//avisando pro express que estamos usando json

server.use(routes);
//quando usa configuraçoes de outro arquivo

server.listen(3333);