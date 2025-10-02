// Contact Us Page
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold neon-text mb-4">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-8">Reach out for support, questions, or to join our calisthenics community.</p>
      <form className="bg-gray-800 p-6 rounded-lg neon-border w-full max-w-md">
        <input type="text" placeholder="Your Name" className="w-full mb-4 px-4 py-2 rounded bg-gray-900 text-white" />
        <input type="email" placeholder="Your Email" className="w-full mb-4 px-4 py-2 rounded bg-gray-900 text-white" />
        <textarea placeholder="Message" className="w-full mb-4 px-4 py-2 rounded bg-gray-900 text-white" rows={4} />
        <button type="submit" className="bg-neon text-black px-6 py-2 rounded font-bold hover:bg-neon-dark transition">Send</button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm mb-2">Follow us on social media for updates:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
        </div>
      </div>
    </main>
  );
}
