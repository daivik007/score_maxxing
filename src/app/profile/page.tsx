"use client"

import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react';

export default function Profile() {
  // Array of motivational quotes
  const quotes = [
    "Believe in yourself! You are capable of amazing things.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are stronger than you think.",
    "Stay positive, work hard, make it happen.",
    "Your limitation—it’s only your imagination."
  ];

  // Random quote state
  const [quote, setQuote] = useState("");

  // Simulated purchased courses data
  const purchasedCourses = [
    { title: "Algebra Mastery", completion: "75%" },
    { title: "Advanced Calculus", completion: "50%" },
    { title: "Physics for Engineers", completion: "90%" }
  ];

  // Set random quote on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []); // Empty dependency array ensures it runs only once when component mounts

  // Logout handler (you can replace this with actual logout functionality)
  const handleLogout = () => {
    // Placeholder for actual logout logic
    console.log("User logged out.");
    // Navigate to login or home page after logout (replace with your routing logic)
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 mt-10 py-8 font-sans">
        <h1 className="text-xl font-bold mb-6">Your Profile</h1>

        {/* Random Motivational Quote */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">Motivational Quote</h2>
          <p className="text-gray-700 italic">"{quote}"</p>
        </div>

        {/* Purchased Courses */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Purchased Courses</h2>
          <ul>
            {purchasedCourses.map((course, index) => (
              <li key={index} className="mb-4">
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-gray-600">Completion: {course.completion}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Logout</h2>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
