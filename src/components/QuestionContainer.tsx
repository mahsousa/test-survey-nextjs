import { QuestionType } from "@/enums/QuestionType";
import { Question } from "../types/Question";
import Star from "./Star";
import RadioGroups from "./RadioGroups";
import TextArea from "./TextArea";
import SelectField from "./SelectField";
import SingleQuestion from "./SingleQuestion";
import MultipleChoices from "./MultipleChoices";

interface QuestionProps {
  question: Question;
  index : number;
  onQuestionChange: (updatedQuestion: Question, index: number) => void;
}

export default function QuestionContainer({ question, index, onQuestionChange }: QuestionProps) {
  
  const onValueChange = (updatedAnswer: number | string) => {
    question.answerValue = updatedAnswer;
    onQuestionChange(question, index);
  }

  var questionComponent = null;
  switch (question.typeQuestion) {
    case QuestionType.Star:
      questionComponent = <Star initialRating={Number(question.answerValue) ?? 1} onValueChange={onValueChange} />;
      break;
    case QuestionType.RadioGroup:
      questionComponent = <RadioGroups initialValue={Number(question.answerValue) ?? 1} onValueChange={onValueChange} />;
      break;
    case QuestionType.TextArea:
      questionComponent = <TextArea initialValue="" onValueChange={onValueChange}/>;
      break;
    case QuestionType.SelectField:
      questionComponent = <SelectField options={question.itens ?? []} onValueChange={onValueChange}/>;
      break;
    case QuestionType.SingleQuestion:
      questionComponent = <SingleQuestion initialAnswer={0} onValueChange={onValueChange} />;
      break;
    case QuestionType.MultipleChoices:
      questionComponent = <MultipleChoices options={question.itens ?? []} horizontal={question.horizontal ?? false}  onValueChange={onValueChange}/>;
      break;
    default:
      questionComponent = null;
      break;
  }

  return (
    <div className="">
      <div className="font-poppins text-14 leading-7 tracking-normal text-left">
        {question.content}
      </div>
      {questionComponent}
      {question.isQuestionValid ? null : <p className="text-red-500">
        Este campo é obrigatório
      </p>}
    </div>
  );
}
