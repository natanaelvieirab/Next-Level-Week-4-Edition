import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from "../models/User";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRespository = getRepository(User);

        //Este trecho de código é comparavel ha: select * from users where email = "email"
        const userAlreadyExists = await usersRespository.findOne({
            email
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                erro: "User already exists!"
            });
        }
        const user = usersRespository.create({
            name, email
        });

        await usersRespository.save(user);

        return response.json(user);
    }
}

export { UserController }