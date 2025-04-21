import React, {useState} from "react";
import Image from "next/image";
import ramseyPhoto from "@/assets/Ramsey-Photo.png";
import { useRouter } from 'next/navigation';
import { calculateMacros } from '../utils/calculateMacros'



interface UserProfileData {
    weight: string;
    height: string;
    gender: string;
    activityLevel: string;
    age: string;
    goal: string;
}

type UserProfileFormProps = {
    onSubmit: (profile: UserProfileData) => void;
}

export default function UserProfileForm({onSubmit}: UserProfileFormProps) {
    const router = useRouter();

    const [formData, setFormData] = useState<UserProfileData>({
        weight: '',
        height: '',
        gender: '',
        activityLevel: '',
        age: '',
        goal: '',
    });

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);

        const result = calculateMacros({
            weightLbs: formData.weight,
            heightCm: formData.height,
            age: formData.age,
            gender: formData.gender,
            activityLevel: formData.activityLevel,
            goal: formData.goal,
        });

        setFormData({
            weight: '',
            height: '',
            gender: '',
            activityLevel: '',
            age: '',
            goal: '',
        });

        router.push('/project');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md text-black">
            <h2 className="text-2x1 font-bold mb-4">Tell us about yourself</h2>
            <label className="block mb-2">
                Weight (lbs)
                <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>

            <label className="block mb-2">
                Height (cm)
                <input type="text" name="height" value={formData.height} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>
            
            <label className="block mb-2">
                Gender
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border rounded p-2 mt-1">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>

            <label className="block mb-2">
                Activity Level
                <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} className="w-full border rounded p-2 mt-1">
                <option value="">Select level</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                    <option value="very active">Very Active</option>
                </select>
            </label>

            <label className="block mb-2">
                Age
                <input type="text" name="age" value={formData.age} onChange={handleChange} className="w-full border rounded p-2 mt-1"/>
            </label>

            <label className="block mb-2">
                Goal
                <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} className="w-full border rounded p-2 mt-1">
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

