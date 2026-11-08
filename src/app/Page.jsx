"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  // Mock data for the workout library grid
  const workouts = [
    { id: 1, name: "BARBELL BENCH PRESS", equipment: "Barbell, Bench", duration: "25 min", calories: "180 kcal", rating: "4.8", tags: ["CHEST", "ARMS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "PULL-UP", equipment: "Pull-up Bar", duration: "20 min", calories: "140 kcal", rating: "4.7", tags: ["BACK", "ARMS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "BACK SQUAT", equipment: "Barbell, Rack", duration: "30 min", calories: "220 kcal", rating: "4.9", tags: ["LEGS", "CORE"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "OVERHEAD PRESS", equipment: "Barbell", duration: "20 min", calories: "150 kcal", rating: "4.6", tags: ["SHOULDERS", "ARMS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "DUMBBELL BICEP CURL", equipment: "Dumbbells", duration: "15 min", calories: "95 kcal", rating: "4.7", tags: ["ARMS", "BICEPS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "TRICEP PUSHDOWN", equipment: "Cable Machine", duration: "15 min", calories: "90 kcal", rating: "4.5", tags: ["ARMS", "TRICEPS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 7, name: "HOLLOW-BODY PLANK", equipment: "Bodyweight", duration: "10 min", calories: "60 kcal", rating: "4.8", tags: ["CORE", "ABS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 8, name: "DUMBBELL BICEP CURL", equipment: "Dumbbells", duration: "15 min", calories: "95 kcal", rating: "4.7", tags: ["ARMS", "BICEPS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 9, name: "CONVENTIONAL DEADLIFT", equipment: "Barbell", duration: "35 min", calories: "280 kcal", rating: "4.9", tags: ["BACK", "LEGS"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 10, name: "PUSH-UP", equipment: "Bodyweight", duration: "12 min", calories: "80 kcal", rating: "4.6", tags: ["CHEST", "CORE"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 11, name: "WALKING LUNGE", equipment: "Dumbbells", duration: "18 min", calories: "130 kcal", rating: "4.7", tags: ["LEGS", "GLUTES"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 12, name: "RUSSIAN TWIST", equipment: "Medicine Ball", duration: "10 min", calories: "70 kcal", rating: "4.4", tags: ["CORE", "OBLIQUES"], image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Hero Banner Section */}
        <div className="relative bg-[#18181b] border border-[#27272a] rounded-2xl p-8 md:p-12 mb-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-widest text-[#ccff00] uppercase block mb-3">
              WORKOUT LIBRARY
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="text-xs md:text-sm text-gray-400 mt-4 leading-relaxed">
              FitLog is a dark, no-nonsense gym companion with a 5x lift/day cap, a strict workout plan, and authentic weekly work output.
            </p>
            <div className="mt-6">
              <Link
                href="/my-plan"
                className="bg-[#ccff00] hover:bg-[#b3e000] text-black text-xs font-bold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2 shadow-lg shadow-[#ccff00]/10"
              >
                Browse Workouts →
              </Link>
            </div>
          </div>

          {/* Decorative Hero Graphic Placeholder */}
          <div className="w-full md:w-auto flex justify-center">
            <div className="bg-[#121212] border border-[#27272a] rounded-xl p-4 w-72 h-44 flex items-center justify-center text-gray-500 text-xs italic">
              [Fitness Graphic / Illustration]
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-lg font-extrabold uppercase tracking-wider text-white">
            THE LIBRARY
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Explore and structure every heavy muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {workouts.map((item) => (
            <Link
              key={item.id}
              href={`/details/${item.id}`}
              className="bg-[#18181b] border border-[#27272a] hover:border-[#ccff00]/50 rounded-xl overflow-hidden flex flex-col transition group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] bg-[#222226] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#ccff00] text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#ccff00] transition">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {item.equipment}
                  </p>
                </div>

                {/* Stats Footer inside Card */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#27272a] text-[11px] text-gray-400 font-medium">
                  <span>⏱ {item.duration}</span>
                  <span>🔥 {item.calories}</span>
                  <span className="text-white font-bold">★ {item.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

    </div>
  );
}