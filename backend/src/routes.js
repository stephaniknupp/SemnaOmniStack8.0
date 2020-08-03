const express = require('express');
//importa a biblioteca do express

const DevController = require('./controllers/DevController');

const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DislikeController');

const routes = express.Router();
//função pra criar um objeto específico pra rotas

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
//método da rota pra criar 

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DisLikeController.store);

module.exports = routes;
//exporta a variavel routes para que as rotas sejam conhecidas por outros arquivos(no caso queremos que o server.js tenha acesso a elas)
