"use client"
import React, { useEffect, useState } from "react";
import ProgressRing from "./progressRing";
import Card from "@/components/card";
import ramseyPhoto from "@/assets/Ramsey-Photo.png"
import Image from "next/image";
import AddItemDropDown from "@/components/additemdropdown";
import { getSession } from "next-auth/react";

const Project = () => {
  const [items, setItems] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const session = await getSession();

        const user = await fetch(`/api/users/${session?.user?.email}`);
        const user_data = await user.json();

        const userID = user_data.user._id.toString();

        const response = await fetch(`/api/items/byUser/${userID}`);
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
        {loading ? <h1 className="m-10 p-6 bg-white text-black text-center rounded-full uppercase"><b>Loading...</b></h1> :
        <div>
          <AddItemDropDown {...{items, setItems}}/>
        </div>
        }
      </div> 
    </div>
  );
};

export default Project;
