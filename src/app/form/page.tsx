"use client"
import AddItemForm from "@/components/additemform";
import React from "react";
import { useState } from "react";

const form = () => {
  const [formData, setFormData] = useState({name: '', calories: 0, carbs: 0, fats: 0, protein: 0});

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the data thats been submitted (consoles the form data)
      console.log(formData);

    setFormData({name: '', calories: 0, carbs: 0, fats: 0, protein: 0})
  }


  return (
    <AddItemForm {...{handleChange, handleSubmit, formData}}></AddItemForm>
  );
}

export default form;
  