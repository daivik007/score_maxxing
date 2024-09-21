"use client"

import Navbar from "../components/Navbar";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PerformanceReview() {
  // Sample data for graphs
  const performanceData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
    datasets: [
      {
        label: 'Your Score',
        data: [65, 70, 72, 78, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Target Score',
        data: [70, 72, 75, 80, 85],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const improvementData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Your Improvement',
        data: [60, 62, 65, 70, 75],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 mt-10 py-8 font-sans">
        <h1 className="text-xl font-bold mb-6">Performance Review</h1>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Your Performance</h2>
            <p className="text-gray-700">Your average score across tests: <span className="font-bold">75%</span></p>
            <p className="text-gray-700">Your percentile: <span className="font-bold">85th percentile</span></p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Targeted Score</h2>
            <p className="text-gray-700">Your targeted score: <span className="font-bold">80%</span></p>
            <p className="text-gray-700">Keep improving to reach your target!</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
            <p className="text-gray-700">You have improved by <span className="font-bold">15%</span> over the last 5 tests.</p>
          </div>
        </div>

        {/* Line Graph: User Score vs Targeted Score */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Your Score vs Targeted Score</h2>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Line data={performanceData} />
          </div>
        </div>

        {/* Improvement Graph */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Improvement Over Time</h2>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Line data={improvementData} />
          </div>
        </div>
      </div>
    </>
  );
}
