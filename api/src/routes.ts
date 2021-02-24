import { Router } from 'express';
import { UserController } from './controllers/User-controller';

const router = Router();

const userController = new UserController();

router.post("/users", userController.create);

export { router };