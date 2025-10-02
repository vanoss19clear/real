// Progress Tracker Page - Charts and logs for workout progress
import React from 'react';

export default function ProgressPage() {
  // Placeholder data for chart and logs
  const progressLogs = [
    { date: '2025-09-28', workout: 'Push-Ups', reps: 30 },
    { date: '2025-09-29', workout: 'Pull-Ups', reps: 10 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <section className="mb-8">
        <h1 className="text-4xl font-bold neon-text mb-2">Progress Tracker</h1>
        <p className="text-lg text-gray-300">Track your calisthenics journey with charts and logs.</p>
      </section>
      {/* Chart Placeholder */}
      <section className="mb-8">
        <div className="bg-gray-800 rounded-lg p-4 neon-border">
          {/* Replace with chart library (e.g., Chart.js) */}
          <p className="text-neon">[Progress Chart Placeholder]</p>
        </div>
      </section>
      {/* Logs */}
      <section>
        <h2 className="text-xl font-semibold text-neon mb-4">Workout Logs</h2>
        <ul>
          {progressLogs.map((log, idx) => (
            <li key={idx} className="mb-2 bg-gray-800 rounded p-2 neon-border">
              <span className="text-neon font-bold">{log.date}</span> - {log.workout}: {log.reps} reps
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// Neon accent styles (add to globals.css)
// .neon-text { color: #39ff14; text-shadow: 0 0 8px #39ff14; }
// .neon-border { border: 2px solid #39ff14; box-shadow: 0 0 8px #39ff14; }
// .text-neon { color: #39ff14; }
