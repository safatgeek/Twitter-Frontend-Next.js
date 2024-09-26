"use client";

import { Prompt } from 'next/font/google';
import XSvg from "../components/svgs/X";

import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdPassword } from "react-icons/md";

import { useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:500";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["900", "700"],
});

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the formData or use it as needed
    console.log(formData);
    signup();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the respective form field
    });
  };

  const signup = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      
      const data = await res.json();

      setIsLoading(false);
  
      if(!res.ok) {
        throw new Error(data.error)
      }
  
      console.log("Signup Success", data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="h-screen">
      <div className="m-auto w-[16rem] md:w-full">
        <div className="flex flex-col md:flex-row justify-center h-screen gap-8 md:gap-40 items-center">
          <XSvg className="fill-white h-20 w-20 md:h-72 md:w-72 self-start md:self-center" />

          <div className="flex flex-col items-start gap-4">
            <span className={`font-bold text-4xl ${prompt.className}`}>
              Join Today
            </span>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail className="h-4 w-4" />
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <FaPenToSquare className="h-4 w-4" />
                <input
                  type="text"
                  name="fullName"
                  className="grow"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <FaUser className="h-4 w-4" />
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="User Name"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <MdPassword className="h-4 w-4" />
                <input
                  type="password"
                  name="password"
                  className="grow"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>

              <div className="flex flex-col gap-1">
                <span>Already have an account?</span>
                {isLoading && (
                  <div>Signing up...</div>
                )}

                {!isLoading && (
                  <button className="btn btn-info">Signup</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
