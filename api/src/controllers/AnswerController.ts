import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppErros";
import { SurveyUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveyUsersRespository = getCustomRepository(SurveyUsersRepository);

        const surveyUser = await surveyUsersRespository.findOne({
            id: String(u),
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!");
        }

        surveyUser.value = Number(value);

        await surveyUsersRespository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }