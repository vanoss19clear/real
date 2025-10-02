// Get Certificate Page
import React from 'react';

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold neon-text mb-4">Get Your Certificate</h1>
      <p className="text-lg text-gray-300 mb-8">Complete our program and earn your official calisthenics certificate!</p>
      <div className="bg-gray-800 p-6 rounded-lg neon-border flex flex-col items-center">
        <span className="text-neon text-2xl font-bold mb-2">🏅</span>
        <p className="mb-4">Show your achievement and inspire others.</p>
        <button className="bg-neon text-black px-6 py-2 rounded font-bold hover:bg-neon-dark transition">Get Certificate</button>
      </div>
    </main>
  );
}
