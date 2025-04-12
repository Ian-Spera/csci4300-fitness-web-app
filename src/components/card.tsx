import { StringExpressionOperatorReturningBoolean } from "mongoose";
import React from "react";

interface CardProps {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  }
  
  const Card: React.FC<CardProps> = ({name, calories, protein, carbs, fats}) => {
    return (
      <div className="bg-white text-black p-4 rounded-lg shadow-lg">
        <h2 className="text-x1 font-bold mb-2">{name}</h2>
          <ul>
            <li><strong>Calories:</strong>{calories}</li>
            <li><strong>Protein:</strong>{protein}</li>
            <li><strong>Carbs:</strong>{carbs}</li>
            <li><strong>Fats:</strong>{fats}</li>
          </ul>
      </div>
    );
  };
  
  export default Card;