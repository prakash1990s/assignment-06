"use client";

import { useState } from "react";
import Link from "next/link";

export default function MyPlanSaved() {
  const [activeTab, setActiveTab] = useState("saved");
  const [sortBy, setSortBy] = useState("duration");
  
  // Sample saved exercises matching the second screenshot
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: "RUSSIAN TWIST",
      category: "Medicine Ball",
      duration: "8 min",
      calories: "70 kcal",
      rating: "4.1",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "PULL-UP",
      category: "Pull-up Bar",
      duration: "15 min",
      calories: "120 kcal",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=300&auto=format&fit=crop",
    },
  ]);

  const handleRemove = (id) => {
    setExercises(exercises.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* 1. Navbar */}
      <header className="h-16 bg-[#121212] border-b border-[#222222] px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-black tracking-wide text-xl">
          <span className="text-[#ccff00]">FIT</span>LOG
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 bg-[#181818] px-4 py-1.5 rounded-full border border-[#2a2a2a]">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition">
            Workouts
          </Link>
          <Link href="/my-plan" className="bg-[#ccff00] text-black px-4 py-1 rounded-full text-sm font-semibold transition">
            My Plan
          </Link>
        </nav>

        {/* Right Badges */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-[#181818] border border-[#2a2a2a] px-3 py-1.5 rounded-full">
            <span className="text-gray-400">Plan</span>
            <span className="bg-[#2a2a2a] text-gray-300 w-5 h-5 rounded-full flex items-center justify-center">2</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#181818] border border-[#2a2a2a] px-3 py-1.5 rounded-full">
            <span className="text-gray-400">Saved</span>
            <span className="bg-[#ccff00] text-black w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
          </div>
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Page Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">MY PLAN</h1>
          <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
        </div>

        {/* 3. Summary Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 relative overflow-hidden">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">Exercises</p>
            <p className="text-4xl font-black text-[#ccff00]">{exercises.length}</p>
          </div>
          <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 relative overflow-hidden">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">Minutes</p>
            <p className="text-4xl font-black text-white">23</p>
          </div>
          <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 relative overflow-hidden">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">Calories</p>
            <p className="text-4xl font-black text-white">190</p>
          </div>
        </div>

        {/* 4. Controls Toolbar (Tabs & Sort) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 bg-[#141414] p-1 border border-[#222222] rounded-xl">
            <button
              onClick={() => setActiveTab("todays-plan")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeTab === "todays-plan" ? "bg-[#1f1f1f] text-white shadow" : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeTab === "saved" ? "bg-[#1f1f1f] text-white shadow" : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#141414] border border-[#222222] text-white text-xs font-medium px-3 py-2 rounded-lg focus:outline-none focus:border-[#ccff00]"
            >
              <option value="duration">duration</option>
              <option value="calories">calories</option>
              <option value="rating">rating</option>
            </select>
          </div>
        </div>

        {/* 5. Exercise List Items (Saved State Layout) */}
        <div className="space-y-4">
          {exercises.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-[#222222] hover:border-[#333333] transition rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              {/* Left Side: Thumbnail & Details */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-16 object-cover rounded-xl border border-[#262626]"
                />
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-wide mb-0.5">{item.title}</h3>
                  <p className="text-gray-400 text-xs mb-2">{item.category}</p>
                  
                  {/* Meta badges */}
                  <div className="flex items-center gap-4 text-xs text-gray-300 font-medium">
                    <span className="flex items-center gap-1">
                      ⏱ {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {item.calories}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      ★ <span className="text-white">{item.rating}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Buttons (Matches Saved Tab view) */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button className="bg-transparent hover:bg-[#1a1a1a] text-gray-300 border border-[#2a2a2a] px-4 py-2 rounded-xl text-xs font-semibold transition">
                  View Details
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-500 hover:text-red-400 p-2 transition text-sm font-bold"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {exercises.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-[#141414] border border-[#222222] rounded-2xl">
              No saved exercises found.
            </div>
          )}
        </div>

      </main>

      {/* 6. Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 mt-16 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div className="flex items-center gap-2 text-white font-black tracking-wide">
          <span className="text-[#ccff00]">FIT</span>LOG
        </div>
        <p>© 2026 FitLog — Workout lighter. Train, log honest.</p>
      </footer>

    </div>
  );
}