"use client";
import React, { useState } from 'react';

interface StarProps {
  initialRating: number;
  onValueChange: (updatedAnswer: number) => void;
}

const Star: React.FC<StarProps> = ({ initialRating, onValueChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (index: number) => {
    var newRating : number = index + 1;
    setRating(newRating);
    onValueChange(newRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`desktop:text-64 laptop:text-64 tablet:text-40 mobile:text-24 inline-block mr-4 mobile:mr-2 cursor-pointer ${
        index < rating ? 'text-yellow-400' : 'text-gray-500'
      }`}
      onClick={() => handleStarClick(index)}
    >
      ★
    </span>
  ));

  return stars;
};

export default Star;
