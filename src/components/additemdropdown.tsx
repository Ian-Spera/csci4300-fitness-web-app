import AddItemForm from "@/components/additemform";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine, RiArrowGoForwardLine } from 'react-icons/ri';


export default function AddItemDropDown() {
    const [formData, setFormData] = useState({name: '', calories: 0, carbs: 0, fats: 0, protein: 0});
    const [active, setActive] = useState(false);
    const [ item, createItem] = useState();

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
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok)
                throw new Error('Response was not ok.');
        } catch (error) {
            console.error('Error in CreateItem: ', error);
        } // try/catch
        setFormData({name: '', calories: 0, carbs: 0, fats: 0, protein: 0})
    } // handleSubmit
    
    return (
        <div className="w-full">
            <button onClick={handleButtonClick} className={`flex place-items-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-red-500 transition duration-300 ${active ? "rounded-b-none" : ""}`}>
                <p className="align-text-bottom">Add New Food Item</p>
                {active ? <RiArrowDropDownLine className="size-8"/> : <RiArrowDropRightLine className="size-8"/>}
                </button>
            <AddItemForm {...{handleChange, handleSubmit, formData, active}}></AddItemForm>
        </div>
    );
}