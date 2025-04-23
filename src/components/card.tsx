import { StringExpressionOperatorReturningBoolean } from "mongoose";
import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type CardFunc = {
  remove(card_id: string): (card_id: string) => void,
}

interface CardProps {
    _id: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    remove(card_id: string): void;
  }
  
  const Card: React.FC<CardProps> = ({_id, name, calories, protein, carbs, fats, remove}: CardProps) => {
    const removeItem = async () => {
      try {
        const response = await fetch(`/api/items/${_id}`, {
          method: "DELETE",
        });
        if (!response.ok)
          throw new Error("Response was not ok.");
        remove(_id);
      } catch (error) {
        console.error("Could not delete item: ", error);
      }
    }

    return (
      <div className="flex justify-between items-center bg-white text-black rounded-lg shadow-lg w-full max-w-md">
        <div className="p-4">
          <h2 className="text-x1 font-bold mb-2">{name}</h2>
            <ul>
              <li><strong>Calories: </strong>{calories} g</li>
              <li><strong>Protein: </strong>{protein} g</li>
              <li><strong>Carbs: </strong>{carbs} g</li>
              <li><strong>Fats: </strong>{fats} g</li>
            </ul>
        </div>
        <div className="ml-4">
        </div>
        <div className="flex items-start h-full w-1/8">
          <button onClick={removeItem} className="hover:bg-[#000000] h-full w-full rounded-e-lg text-[20px] transition-all hover:text-white duration-200 ease-in-out">X</button>
        </div>
      </div>
    );
  };
  
  export default Card;