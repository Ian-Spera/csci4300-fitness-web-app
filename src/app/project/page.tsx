import React from "react";
import ProgressRing from "./progressRing";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import Card from "@/components/card";
import FoodItemsInit from "../../../FoodItems.json"
import ramseyPhoto from "@/assets/Ramsey-Photo.png"
import Image from "next/image";

const Project = () => {

  return (
    <div className="relative min-h-screen text-white overflow-y-auto">
      <Image src={ramseyPhoto} alt="Ramsey BG" fill priority className="object-cover w-full h-full z-[-1]"/>
      <div className="flex items-center justify-between bg-white text-black px-8 py-4 border-b-4 border-red-600">
        <div className="border-4 border-gray-700 rounded-xl p-3 bg-gray-100 shadow-sm w-full">
          <div className="flex justify-between items-center w-full space-x-4">
              <ProgressRing progress={70} color="red" label="Calories" />
              <ProgressRing progress={90} color="blue" label="Protein" />
              <ProgressRing progress={40} color="green" label="Carbs" />
              <ProgressRing progress={50} color="orange" label="Fats" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Plan</h1>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-500 transition duration-300">
          <a href="/form">Add new Food item</a>
        </button>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {FoodItemsInit.map((item, index) => (
            <Card
              key = {index}
              name = {item.name}
              calories = {item.calories}
              protein = {item.protein}
              carbs = {item.carbs}
              fats = {item.fats}
              imageUrl = {item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
