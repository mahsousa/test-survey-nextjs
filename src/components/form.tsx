"use client";
import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import { getError, getSuccess, getSurvey, postSurvey, SurveyRequest, SurveyResponse } from './../api/Survey';
import ButtonsSend from "./ButtonsSend";
import { Question, validate } from "@/types/Question";
import MessageModal from "./MessageModal";

export default function Form() {
  const [surveyData, setSurveyData] = useState<SurveyResponse | null>(null);
  const [isSurveyValid, setIsSurveyValid] = useState(false);

  useEffect(() => {
    getSurvey()
      .then(data => setSurveyData(data))
      .catch(error => openModal('error', error));
  }, []);

  const handleQuestionChange = (updatedQuestion: Question, index : number) => {
    if(!surveyData || !surveyData.itens) return;
    updatedQuestion.isQuestionValid = validate(updatedQuestion);
    // Create a new copy of surveyData.itens and modify the copy
    const newItens = [...surveyData.itens];
    newItens[index] = updatedQuestion;

    // Call setSurveyData with the new copy
    setSurveyData({
      ...surveyData,
      itens: newItens,
    });
    validateSurvey();
  };

  const handleSendFakePost = () => {
    if(!validateSurvey()) return;

    var request : SurveyRequest = {
      questions: surveyData!.itens! as Question[]
    };
    postSurvey(request)
    .then(data => {
      if(data.error) {
        openModal('error', data.error);
      } else {
        openModal('success', `Suas respostas foram enviadas com sucesso!`);
      }
    })
    .catch(error => console.error(error));
  }

  const validateSurvey = () => {
    if(!surveyData || !surveyData.itens) return false;
    var validationResult = true;
    for (let index = 0; index < surveyData.itens.length; index++) {
      const question = surveyData.itens[index];
      if(!validate(question)) {
        validationResult = false;
        break;
      }
    }
    setIsSurveyValid(validationResult);
    return validationResult;
  }

  const handleSendSuccess = () => {
    getSuccess()
    .then(_ => {
      openModal('success', `Suas respostas foram enviadas com sucesso!`);
    })
    .catch(error => openModal('error', error));
  }

  const handleSendError = () => {
      getError()
      .then(data => {
        openModal('error', data.error);
      })
      .catch(error => openModal('error', error));
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<'success' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (status: 'success' | 'error', message: string) => {
    setModalStatus(status);
    setModalMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container-fluid flex justify-center">
      <div className="container tablet:w-2/3 laptop:w-1/2 desktop:w-1/2 mobile:w-2/3 mx-auto bg-white rounded-lg p-5 -mt-100 mobile:-mt-50">
        {
          surveyData?.itens?.map((item, index) => (
            <QuestionContainer 
              key={index} 
              index={index}
              question={item} 
              onQuestionChange={handleQuestionChange} />
          ))
        }
        {
          !isSurveyValid && 
          <p className="text-red-500">Preencha todos os campos obrigatórios</p>
        }
        <ButtonsSend onSendError={handleSendError} onSendSuccess={handleSendSuccess} onSendFakePost={handleSendFakePost}/>
        <MessageModal
          isOpen={modalOpen}
          onClose={closeModal}
          status={modalStatus}
          message={modalMessage}
        />
      </div>
    </div>
  );
}

