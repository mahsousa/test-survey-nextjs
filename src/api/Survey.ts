import type { NextApiRequest, NextApiResponse } from 'next';
import { Question, validate } from '@/types/Question';

export type SurveyResponse = {
    itens?: Question[];
    error: string;
    warning: string;
    id?: string;
}

export type SurveyRequest = {
    questions: Question[];
}

export async function getSurvey(): Promise<SurveyResponse> {
    const response = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json');
    const data: SurveyResponse = await response.json();
    
    // validate all question items before return
    data.itens = data.itens?.map((item) => {
        item.isQuestionValid = validate(item);
        return item;
    });
    return data;
}

export async function postSurvey(survey : SurveyRequest): Promise<SurveyResponse> {
    try{
        const response = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(survey),
        });
        const data: SurveyResponse = await response.json();
        return data;

    }
    catch(error: unknown){
        console.error(error);
        return {
            error: "Ops... Não conseguimos enviar o seu formulário",
            warning: ""
        };
    }
}

export async function getError(): Promise<SurveyResponse> {
    const response = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json');
    const data: SurveyResponse = await response.json();
    return data;
}

export async function getSuccess(): Promise<SurveyResponse> {
    const response = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json');
    const data: SurveyResponse = await response.json();
    return data;
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SurveyResponse>
) {
    const data = await getSurvey();
    res.status(200).json(data);
}