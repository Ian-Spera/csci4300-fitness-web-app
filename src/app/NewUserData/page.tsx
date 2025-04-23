"use client"

import React, {useState} from "react";
import Image from "next/image";
import ramseyPhoto from "@/assets/Ramsey-Photo.png";
import { useRouter } from 'next/navigation';
import { calculateMacros } from '../utils/calculateMacros'
import { getSession } from "next-auth/react";

export default function ProfilePage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        weight: 0,
        height: 0,
        gender: '',
        activityLevel: '',
        age: 0,
        goal: '',
    });

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();      

        try {
            const session = await getSession();
            if (!session) {
                console.error("No session found!");
            }
        
            const user = await fetch(`/api/users/${session?.user?.email}`);
            const user_data = await user.json();
            const userID = user_data.user._id.toString();

            console.log(userID);
            const {calories, protein, fat, carbs} = calculateMacros({
                weightLbs: formData.weight,
                heightCm: formData.height,
                age: formData.age,
                gender: formData.gender,
                activityLevel: formData.activityLevel,
                goal: formData.goal,
            });

            const data = {
                userID,
                calories,
                protein,
                fat,
                carbs,
            }

            const response = await fetch('/api/userMacros', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (!response) {
                throw new Error("Failed to save user macros.");
            }

            setFormData({
                weight: 0,
                height: 0,
                gender: '',
                activityLevel: '',
                age: 0,
                goal: '',
            });

            router.push('/project');
        } catch (error) {
            console.error("Error saving user macros.", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md text-black">
            <h2 className="text-2x1 font-bold mb-4">Tell us about yourself</h2>
            <label className="block mb-2">
                Weight (lbs)
                <input type="number" required name="weight" value={formData.weight} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>

            <label className="block mb-2">
                Height (cm)
                <input type="number" required name="height" value={formData.height} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>
            
            <label className="block mb-2">
                Gender
                <select name="gender" required value={formData.gender} onChange={handleChange} className="w-full border rounded p-2 mt-1">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>

            <label className="block mb-2">
                Activity Level
                <select name="activityLevel" required value={formData.activityLevel} onChange={handleChange} className="w-full border rounded p-2 mt-1">
                <option value="">Select level</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                    <option value="veryActive">Very Active</option>
                </select>
            </label>

            <label className="block mb-2">
                Age
                <input type="number" required name="age" value={formData.age} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>

            <label className="block mb-2">
                Goal
                <select name="goal" required value={formData.goal} onChange={handleChange} className="w-full border rounded p-2 mt-1">
                <option value="">Select goal</option>
                    <option value="bulk">Bulk</option>
                    <option value="cut">Cut</option>
                </select>
            </label>

            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                Submit Profile
            </button>
        </form>
    );
}

