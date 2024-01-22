import { useState } from 'react';

interface TextAreaProps {
  initialValue: string;
  onValueChange: (updatedAnswer: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ initialValue, onValueChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    var newValue : string = event.target.value;
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className="container mx-auto mt-5">
      <textarea
        id="myTextarea"
        name="myTextarea"
        rows={4}
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Digite aqui..."
        value={value}
        onChange={handleTextAreaChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
