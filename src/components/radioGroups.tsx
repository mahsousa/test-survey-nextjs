import { useState } from 'react';

interface RadioButtonsProps {
  initialValue: number;
  onValueChange: (updatedAnswer: number) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ initialValue, onValueChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleRadioClick = (index: number) => {
    var newValue : number = index + 1;
    setValue(newValue);
    onValueChange(newValue);
  };

  const radioButtons = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="flex flex-col items-center mx-7 pt-5">
      <input
        id={`radio${index}`}
        type="radio"
        name="status"
        defaultChecked={index === 0} // Marca o primeiro como selecionado por padrão
        className="mb-2 w-5 h-5" // Ajuste o valor de w-6/h-6 conforme necessário
        onClick={() => handleRadioClick(index)}
      />
      <label htmlFor={`radio${index}`} className="text-xs">{index + 1}</label>
    </div>
  ));

  return <div className="flex flex-wrap justify-center">{radioButtons}</div>;
};

export default RadioButtons;
