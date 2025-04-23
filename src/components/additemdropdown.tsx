import AddItemForm from "@/components/additemform";
import { getSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine, RiArrowGoForwardLine } from 'react-icons/ri';
import Card from "./card";
import getMacros from "@/app/utils/getMacrosAPI";

type ItemHandler = {
    items: {}[],
    setItems(list:{}[]): (e: React.Dispatch<React.SetStateAction<{}[]>>) => void,
    setValues(obj:{calories: number, protein: number, fat: number, carbs: number}): (e: React.Dispatch<React.SetStateAction<{calories: number, protein: number, fat: number, carbs: number}>>) => void,
}

export default function AddItemDropDown({items, setItems, setValues}: ItemHandler) {
    const [formData, setFormData] = useState({name: '', servingsize: 0});
    const [active, setActive] = useState(false);

    function handleButtonClick() {
        setActive(prevState => !prevState);
    };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
    } // handleChange
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await getSession();
            const user = await fetch(`/api/users/${session?.user?.email}`);
            const user_data = await user.json();
            const id = user_data.user._id.toString();

            const query = "" + formData.name.toLowerCase() + " " + formData.servingsize.toString() + " grams";
            const macro = await getMacros(query);
            const macroData = macro[0];

            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Use API to fetch data for calories carbs fats and protein
                body: JSON.stringify({userID: id, name: formData.name, calories: macroData.calories, carbs: macroData.carbs, fats: macroData.fat, protein: macroData.protein}),
            });
            
            const items = await fetch(`/api/items/byUser/${id}`);
            const data = await items.json();
            setItems(data.items);

            var calorieTotal = 0;
            var proteinTotal = 0;
            var fatTotal = 0;
            var carbsTotal = 0;
        
            for (var item in data.items) {
                calorieTotal += data.items[item].calories;
                proteinTotal += data.items[item].protein;
                fatTotal += data.items[item].fats;
                carbsTotal += data.items[item].carbs;
            }

            setValues({calories: parseFloat((calorieTotal / (user_data.user.calories) * 100).toFixed(1)), protein: parseFloat((proteinTotal / (user_data.user.protein) * 100).toFixed(1)), fat: parseFloat((fatTotal / (user_data.user.fat) * 100).toFixed(1)), carbs: parseFloat((carbsTotal / (user_data.user.carbs) * 100).toFixed(1))});

            if (!response.ok)
                throw new Error('Response was not ok.');
        } catch (error) {
            console.error('Error in CreateItem: ', error);
        } // try/catch
        setFormData({name: '', servingsize: 0})
    } // handleSubmit

    const handleDelete = async (card_id: string) => {
        const session = await getSession();
        const user = await fetch(`/api/users/${session?.user?.email}`);
        const user_data = await user.json();
        const id = user_data.user._id.toString();

        const items = await fetch(`/api/items/byUser/${id}`);
        const data = await items.json();
        setItems(data.items);

        var calorieTotal = 0;
        var proteinTotal = 0;
        var fatTotal = 0;
        var carbsTotal = 0;
        
        for (var item in data.items) {
            calorieTotal += data.items[item].calories;
            proteinTotal += data.items[item].protein;
            fatTotal += data.items[item].fats;
            carbsTotal += data.items[item].carbs;
        }

        setValues({calories: parseFloat((calorieTotal / (user_data.user.calories) * 100).toFixed(1)), protein: parseFloat((proteinTotal / (user_data.user.protein) * 100).toFixed(1)), fat: parseFloat((fatTotal / (user_data.user.fat) * 100).toFixed(1)), carbs: parseFloat((carbsTotal / (user_data.user.carbs) * 100).toFixed(1))});
    }

    return (
        <div className="w-full">
            <button onClick={handleButtonClick} className={`flex place-items-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-red-500 transition duration-300 ${active ? "rounded-b-none" : ""}`}>
                <p className="align-text-bottom">Add New Food Item</p>
                {active ? <RiArrowDropDownLine className="size-8"/> : <RiArrowDropRightLine className="size-8"/>}
                </button>
            <AddItemForm {...{handleChange, handleSubmit, formData, active}}></AddItemForm>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
            {items?.map((item, index) => (
              // If item.* is red, ignore, it works fine.
              items.length == 0 ? <></> :
              <Card key={index} 
                _id={item._id}
                name={item.name}
                calories={item.calories} 
                protein={item.protein}
                carbs={item.carbs}
                fats={item.fats}
                remove={handleDelete}
              />
            ))}
          </div>
        </div>
    );
}