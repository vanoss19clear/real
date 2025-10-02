// Blog Section - Training & Nutrition Articles
import React from 'react';

// Placeholder articles (replace with dynamic content)
const articles = [
  {
    title: '5 Calisthenics Moves for Beginners',
    summary: 'Start your journey with these foundational exercises.',
    date: '2025-09-20',
  },
  {
    title: 'Nutrition Tips for Muscle Growth',
    summary: 'Fuel your body for optimal performance.',
    date: '2025-09-25',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <section className="mb-8">
        <h1 className="text-4xl font-bold neon-text mb-2">Calisthenics Blog</h1>
        <p className="text-lg text-gray-300">Training & nutrition articles for every athlete.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <article key={idx} className="bg-gray-800 rounded-lg p-4 neon-border">
            <h2 className="text-xl font-semibold text-neon">{article.title}</h2>
            <p className="text-gray-400">{article.summary}</p>
            <span className="text-xs text-neon">{article.date}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

// Neon accent styles (add to globals.css)
// .neon-text { color: #39ff14; text-shadow: 0 0 8px #39ff14; }
// .neon-border { border: 2px solid #39ff14; box-shadow: 0 0 8px #39ff14; }
// .text-neon { color: #39ff14; }
