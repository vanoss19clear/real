// Homepage - Calisthenics lifestyle & motivation hero section
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-0">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/planche-bg.jpg"
          alt="Planche Calisthenics Athlete"
          fill
          style={{ objectFit: 'cover', opacity: 0.25 }}
          priority
        />
        {/* If you add a real image, replace the placeholder in public/planche-bg.jpg */}
      </div>
      {/* Menu Bar */}
      <nav className="w-full flex justify-center py-6 bg-black/60 backdrop-blur-md">
        <ul className="flex gap-8 text-lg font-bold">
          <li><a href="/contact" className="text-neon hover:underline">Contact Us</a></li>
          <li><a href="/program" className="text-neon hover:underline">Our Program</a></li>
          <li><a href="/certificate" className="text-neon hover:underline">Get Certificate</a></li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="text-center mb-12 mt-20">
        <h1 className="text-5xl font-extrabold neon-text mb-4 drop-shadow">Calisthenics Lifestyle</h1>
        <p className="text-xl text-gray-200 mb-6">Unleash your bodyweight potential. Train anywhere, anytime.</p>
        <a href="/workouts" className="bg-neon text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-neon-dark transition">Explore Workouts</a>
      </section>
      {/* Motivation Section */}
      <section className="max-w-2xl text-center">
        <blockquote className="italic text-neon text-2xl mb-4">"Strength is not just in the body, but in the mind."</blockquote>
        <p className="text-gray-300">Join a community of athletes pushing limits and redefining fitness through calisthenics. Progress, track, and share your journey.</p>
      </section>
    </main>
  );
}

// Neon accent styles (add to globals.css)
// .neon-text { color: #39ff14; text-shadow: 0 0 8px #39ff14; }
// .bg-neon { background: #39ff14; }
// .text-neon { color: #39ff14; }
// .neon-border { border: 2px solid #39ff14; box-shadow: 0 0 8px #39ff14; }
// .bg-neon-dark { background: #1f7a1f; }
