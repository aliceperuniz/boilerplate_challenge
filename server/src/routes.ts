import express from 'express';
import UserController from '@controllers/UserController'
import InfoController from '@controllers/InfoController';

const routes = express.Router();
const userController = new UserController();
const infoController = new InfoController();

routes.post('/user', userController.create);
routes.post('/challenge', infoController.create);


export default routes;