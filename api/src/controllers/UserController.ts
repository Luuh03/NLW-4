import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
// import necessário para passar um tipo para o request e response do " async create"

class UserController {

  async create (request: Request, response: Response) {
    // desestruturação para tornar mais simples a "coleta" dos valores name e email no const user
    const { name, email } = request.body;
    
    const usersRepository = getRepository(User);

    // select * from users where email = email
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    // SE ja existir um usuário com determinado email ele retorna um erro
    if(userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };