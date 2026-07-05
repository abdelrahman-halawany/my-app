"use client";

import { useState } from "react";
import { SignupForm } from "@/components/signup-form";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
   
  

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center  from-blue-50 via-white to-purple-100 p-4">
      <SignupForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}