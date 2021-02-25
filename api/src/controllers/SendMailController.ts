import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UserRepository";

class SendMailController {

  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({email});
    
    // checa se o email é válido / já esta cadastrado
    if(!userAlreadyExists) {
      return response.status(400).json({
        error: "User does not exists"
      })
    }

    const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id})
    
    // checa se o survey_id é válido / já esta cadastrado
    if(!surveyAlreadyExists) {
      return response.status(400).json({
        error: "Survey does not exists"
      })
    }

    // Salvar as informações na tabela surveyUser
    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    })
    await surveysUsersRepository.save(surveyUser)

    // Enviar e-mail para o usuário

    return response.json(surveyUser)
  }
}

export { SendMailController }