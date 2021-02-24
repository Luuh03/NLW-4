import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

// rota que faz a classe UserController chamar o método do create
router.post("/users", userController.create);

export { router };