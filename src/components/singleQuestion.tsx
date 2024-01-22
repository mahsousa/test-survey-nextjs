import { NextPage } from 'next';
import { useState } from 'react';

interface SingleQuestionProps {
  initialAnswer: number;
  onValueChange: (updatedAnswer: number) => void;
}

const SingleQuestion: NextPage<SingleQuestionProps> = ({ initialAnswer, onValueChange }) => {
  const [answer, setAnswer] = useState(initialAnswer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAnswer = event.target.value === 'sim' ? 1 : 0;
    setAnswer(updatedAnswer);
    onValueChange(updatedAnswer);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="mt-2">
        <input
          id="sim"
          type="radio"
          name="opcao"
          value="sim"
          className="mr-2 w-5 h-5"
          checked={answer === 1}
          onChange={handleChange}
        />
        <label htmlFor="sim" className="text-sm text-gray-700">
          Sim
        </label>

        <input
          id="nao"
          type="radio"
          name="opcao"
          value="nao"
          className="ml-4 mr-2 w-5 h-5"
          checked={answer === 0}
          onChange={handleChange}
        />
        <label htmlFor="nao" className="text-sm text-gray-700">
          Não
        </label>
      </div>
    </div>
  );
};

export default SingleQuestion;