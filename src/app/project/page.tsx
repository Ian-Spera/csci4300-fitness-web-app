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
      <div className="flex items-center justify-between bg-white text-black px-6 py-3 border-b-4 border-red-600">
        <div className="flex gap-4">
          <ProgressRing progress={70} color="red" />
          <ProgressRing progress={90} color="blue" />
          <ProgressRing progress={40} color="green" />
        </div>

        <FaCalendarAlt className="text-2x1" />

        <div className="text-center font-bold text-xl">
          <div className="bg-white border-4 border-black px-4 py-1 rounded-full">
            Dawg<span className="text-red-600">Diet</span>
          </div>
        </div>

        <FaUserCircle className="text-3x1" />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
