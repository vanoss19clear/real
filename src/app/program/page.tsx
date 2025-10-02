// Our Program Page
import React from 'react';

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold neon-text mb-4">Our Program</h1>
      <p className="text-lg text-gray-300 mb-8">Discover our structured calisthenics training plans for all levels.</p>
      <ul className="list-disc pl-6 text-left">
        <li className="mb-2">Beginner: Foundation & Mobility</li>
        <li className="mb-2">Intermediate: Strength & Skills</li>
        <li className="mb-2">Advanced: Freestyle & Power Moves</li>
      </ul>
      <a href="/workouts" className="mt-8 bg-neon text-black px-6 py-2 rounded font-bold hover:bg-neon-dark transition">View Workouts</a>
    </main>
  );
}
