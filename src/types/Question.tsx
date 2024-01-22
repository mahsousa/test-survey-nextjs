import { QuestionType } from "@/enums/QuestionType";
import { Item } from "./Item";

export type Question = {
    content: string;
    typeQuestion: QuestionType;
    mandatory: boolean;
    answerValue?: number | string;
    horizontal?: boolean;
    itens?: Item[];
    isQuestionValid: boolean;
}

export function validate(question: Question): boolean {
  if (question.mandatory && question.answerValue === undefined || question.answerValue === '' || question.answerValue === 0) {
    return false;
  }
  return true;
}