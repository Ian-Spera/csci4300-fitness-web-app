import React from "react";
import ProgressRing from "./progressRing";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url('/gym-background.jpg')` }}
    >
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
    </div>

    /*
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Plan</h1>
      <p className="text-lg mb-6">This is the project page.</p>
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-500 transition duration-300">
        <a href="/form">Add new Food item</a>
      </button>
    </div>
     */
  );
};

export default Project;
