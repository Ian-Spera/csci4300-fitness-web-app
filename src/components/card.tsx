import { StringExpressionOperatorReturningBoolean } from "mongoose";
import React from "react";
import Image from "next/image";


interface CardProps {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    imageUrl: string;
  }
  
  const Card: React.FC<CardProps> = ({name, calories, protein, carbs, fats, imageUrl}) => {
    return (
      <div className="flex justify-between items-center bg-white text-black p-4 rounded-lg shadow-lg w-full max-w-md">
        <div>
          <h2 className="text-x1 font-bold mb-2">{name}</h2>
            <ul>
              <li><strong>Calories:</strong>{calories}</li>
              <li><strong>Protein:</strong>{protein}</li>
              <li><strong>Carbs:</strong>{carbs}</li>
              <li><strong>Fats:</strong>{fats}</li>
            </ul>
        </div>
        <div className="ml-4">
          <Image
            src={imageUrl}
            alt={`${name} image`}
            width={128}
            height={128}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default Card;