import React from 'react'; 
import { Item } from '@/types/Item';
import { NextPage } from 'next';

interface SelectFieldProps {
  options: Item[];
  onValueChange: (updatedAnswer: number) => void;
}

const SelectField: NextPage<SelectFieldProps> = ({ options, onValueChange }) => { 
  return (
    <div className="container mx-auto mt-5">
      <select
        id="mySelect"
        name="mySelect"
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(event) => onValueChange(Number(event.target.value))} 
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
