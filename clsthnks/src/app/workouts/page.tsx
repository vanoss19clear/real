"use client";
// Workouts Page - Dynamic filters for difficulty, muscle group, equipment
import React, { useState } from 'react';

// Sample filter options (replace with dynamic data as needed)
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
const muscleGroups = ['Chest', 'Back', 'Legs', 'Arms', 'Core'];
const equipment = ['None', 'Pull-up Bar', 'Rings', 'Parallettes'];

export default function WorkoutsPage() {
  // State for filters
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');

  // Placeholder for filtered workouts
  const filteredWorkouts = [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold neon-text mb-2 drop-shadow">Calisthenics <span className="text-pink-500">Workouts</span></h1>
        <p className="text-lg text-blue-400">Find routines by <span className="text-yellow-400">difficulty</span>, <span className="text-green-400">muscle group</span>, and <span className="text-pink-400">equipment</span>.</p>
        <p className="text-lg text-red-400">Push your limits and master your bodyweight!</p>
        <p className="text-lg text-purple-400">Every rep counts towards greatness.</p>
        <p className="text-lg text-orange-400">Consistency is the key to progress.</p>
      </section>
      {/* Filters */}
      <section className="flex flex-wrap gap-4 mb-8">
        <select value={selectedDifficulty} onChange={e => setSelectedDifficulty(e.target.value)} className="bg-gray-800 text-pink-500 px-4 py-2 rounded neon-border focus:ring-2 focus:ring-neon transition hover:bg-pink-900 hover:text-yellow-400">
          <option value="" className="text-white">Difficulty</option>
          {difficulties.map((d, i) => <option key={d} value={d} className={i === 0 ? "text-pink-500" : i === 1 ? "text-yellow-400" : "text-green-400"}>{d}</option>)}
        </select>
        <select value={selectedMuscle} onChange={e => setSelectedMuscle(e.target.value)} className="bg-gray-800 text-green-400 px-4 py-2 rounded neon-border focus:ring-2 focus:ring-neon transition hover:bg-green-900 hover:text-pink-400">
          <option value="" className="text-white">Muscle Group</option>
          {muscleGroups.map((m, i) => <option key={m} value={m} className={i === 0 ? "text-blue-400" : i === 1 ? "text-green-400" : i === 2 ? "text-yellow-400" : i === 3 ? "text-pink-400" : "text-purple-400"}>{m}</option>)}
        </select>
        <select value={selectedEquipment} onChange={e => setSelectedEquipment(e.target.value)} className="bg-gray-800 text-blue-400 px-4 py-2 rounded neon-border focus:ring-2 focus:ring-neon transition hover:bg-blue-900 hover:text-green-400">
          <option value="" className="text-white">Equipment</option>
          {equipment.map((eq, i) => <option key={eq} value={eq} className={i === 0 ? "text-neon" : i === 1 ? "text-yellow-400" : i === 2 ? "text-pink-500" : "text-green-400"}>{eq}</option>)}
        </select>
      </section>
      {/* Workouts List (placeholder) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with dynamic workout cards */}
          <div className="bg-gray-800 rounded-lg p-4 neon-border hover:scale-105 hover:shadow-neon transition-transform duration-200">
            <h2 className="text-xl font-semibold text-neon">Push-Up <span className="text-pink-500">Progression</span></h2>
            <p className="text-yellow-400">Difficulty: <span className="text-pink-500">Beginner</span></p>
            <p className="text-green-400">Muscle: <span className="text-blue-400">Chest, Arms</span></p>
            <p className="text-pink-400">Equipment: <span className="text-neon">None</span></p>
            <button className="mt-4 px-6 py-2 rounded-full font-bold bg-neon text-black shadow-lg neon-border transition-all duration-200 hover:bg-black hover:text-neon hover:shadow-neon hover:scale-110">Start Workout</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Neon accent styles (add to globals.css)
// .neon-text { color: #39ff14; text-shadow: 0 0 8px #39ff14; }
// .neon-border { border: 2px solid #39ff14; box-shadow: 0 0 8px #39ff14; }
// .text-neon { color: #39ff14; }
// .shadow-neon { box-shadow: 0 0 16px #39ff14, 0 0 32px #39ff14; }
// .focus\:ring-neon:focus { --tw-ring-color: #39ff14; }
