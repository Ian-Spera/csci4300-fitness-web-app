import React from "react";

const Project = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Plan</h1>
      <p className="text-lg mb-6">This is the project page.</p>
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-500 transition duration-300">
        <a href="/form">Add new Food item</a>
      </button>
    </div>
  );
};

export default Project;
