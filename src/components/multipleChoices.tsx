"use client";
import { useState } from 'react';
import { NextPage } from 'next';
import { Item } from '@/types/Item';

interface MultipleChoicesProps {
  options: Item[];
  horizontal: boolean;
  onValueChange: (updatedAnswer: string) => void;
}

const MultipleChoices: NextPage<MultipleChoicesProps> = ({ options, horizontal, onValueChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<Item[]>([]);

  const handleOptionClick = (option: Item) => {
    var newValue : Item[];
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      newValue = selectedOptions.filter((selectedOption) => selectedOption !== option);
    } else {
      newValue = [...selectedOptions, option];
    }
    setSelectedOptions(newValue);
    
    var newAnswer : string = newValue.map((selectedOption) => selectedOption.value).join(',');
    onValueChange(newAnswer);
  };

  return (
    <div className="container mx-auto mt-5">
      {horizontal ? (
      <div className="flex flex-wrap">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleOptionClick(option)}
            className={`m-2 p-2 border rounded-lg ${selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          >
            {option.description}
          </button>
        ))}
      </div>
      ) : (
        <div className="flex flex-col">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              id={`option${index + 1}`}
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionClick(option)}
              className="mr-1 w-5 h-5"
            />
            <label htmlFor={`option${index + 1}`} className="text-sm text-gray-700">
              {option.description}
            </label>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default MultipleChoices;

