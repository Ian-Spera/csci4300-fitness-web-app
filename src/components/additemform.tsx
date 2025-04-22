import React, { useRef } from "react";

type FormHandler = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    formData: {
        name: string, 
        calories: number, 
        carbs: number, 
        fats: number, 
        protein: number
    },
    active: boolean
}

export default function AddItemForm({handleChange, handleSubmit, formData, active} : FormHandler) {
    return (
        <div className={`flex flex-col justify-center ${active ? "" : "hidden"}`}>
            <div className="flex flex-row justify-center items-center p-2 bg-red-500 rounded-tr-lg">
            </div>

            <div className="flex flex-row justify-center p-6 bg-white rounded-br-lg rounded-bl-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row flex-wrap">
                        <div className="flex basis-1/6 pe-5">
                            <label htmlFor="name" className="flex flex-col rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Name</label>
                            <input
                                name="name" 
                                type="text" 
                                required 
                                placeholder="Name of food"
                                onChange={handleChange}
                                value={formData.name}
                                className="flex text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                        <div className="flex basis-1/6 pe-5">
                            <label htmlFor="calories" className="rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Calories</label>
                            <input 
                                name="calories" 
                                type="number" 
                                required 
                                //defaultValue={0}
                                onChange={handleChange}
                                value={formData.calories}
                                className="flex text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                        <div className="flex basis-1/6 pe-5">
                            <label htmlFor="carbs" className="rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Carbs</label>
                            <input 
                                name="carbs" 
                                type="number" 
                                required
                               // defaultValue={0}
                                onChange={handleChange}
                                value={formData.carbs}
                                className="flex text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                        <div className="flex basis-1/6 pe-5">
                            <label htmlFor="fats" className="rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Fats</label>
                            <input 
                                name="fats" 
                                type="number" 
                                required 
                               // defaultValue={0}
                                onChange={handleChange}
                                value={formData.fats}
                                className="flex text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                        <div className="flex basis-1/6">
                            <label htmlFor="protein" className="rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Protein</label>
                            <input 
                                name="protein" 
                                type="number" 
                                required 
                                //defaultValue={0}
                                onChange={handleChange}
                                value={formData.protein}
                                className="flex text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap basis-9/10 justify-center pt-5">
                        <button type="submit" className="rounded-lg bg-red-500 hover:bg-black duration-200 pt-2 pb-2 pl-10 pr-10">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};