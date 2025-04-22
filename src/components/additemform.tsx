import React, { useRef } from "react";

type FormHandler = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    formData: {
        name: string, 
        servingsize: number
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
                                className="flex w-100 text-center text-black rounded-r-lg bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                        </div>
                        <div className="flex basis-1/6 pe-5">
                            <label htmlFor="servingsize" className="w-25 rounded-l-lg bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">Serving Size</label>
                            <input 
                                name="servingsize" 
                                type="number" 
                                required 
                                //defaultValue={0}
                                onChange={handleChange}
                                value={formData.servingsize}
                                className="flex w-100 text-center text-black bg-[#FFFFFF30] shadow-[2px_2px_5px_rgba(0,0,0,0.25)] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"></input>
                            <label className="flex flex-col bg-red-500 p-1 shadow-[2px_2px_5px_rgba(0,0,0,0.25)] text-white rounded-r-lg">(grams)</label>
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