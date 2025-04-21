"use client"
import React, { useEffect, useState } from "react";
import ProgressRing from "./progressRing";
import Card from "@/components/card";
import ramseyPhoto from "@/assets/Ramsey-Photo.png"
import Image from "next/image";
import AddItemDropDown from "@/components/additemdropdown";


const Project = () => {
  const [items, setItems] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        if (!response.ok)
          throw new Error("Response was not ok.");

        const data = await response.json();

        setItems(data.items);
      } catch (error) {
        console.error("Error getting item list.", error);
      } // try/catch
      setLoading(false);
    } // fetchItems

    fetchItems();
  }, []);

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
        <AddItemDropDown></AddItemDropDown>
        {loading ? <h1 className="m-10 p-6 bg-white text-black text-center rounded-full uppercase"><b>Loading...</b></h1> :
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {items.map((item, index) => (
            // If item.* is red, ignore, it works fine.
            <Card key={index} 
              _id={item._id}
              name={item.name}
              calories={item.calories} 
              protein={item.protein}
              carbs={item.carbs}
              fats={item.fats}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        }
      </div> 
    </div>
  );
};

export default Project;
