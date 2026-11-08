"use client";

import { useState } from "react";
import Link from "next/link";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("saved"); // 'today' or 'saved'
  const [sortBy, setSortBy] = useState("Duration");

  // Summary Metrics matching your screenshot
  const metrics = {
    exercises: 2,
    minutes: 23,
    calories: 190,
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ccff00] selection:text-black flex flex-col justify-between">
      
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-10 w-full flex-grow">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Overview Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard label="Exercises" value={metrics.exercises} />
          <MetricCard label="Minutes" value={metrics.minutes} />
          <MetricCard label="Calories" value={metrics.calories} />
        </div>

        {/* Filters and Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          
          {/* Tab Switcher */}
          <div className="bg-[#18181b] p-1 rounded-xl border border-[#27272a] flex items-center gap-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition cursor-pointer ${
                activeTab === "today"
                  ? "bg-[#27272a] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#27272a] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown Selector */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#18181b] border border-[#27272a] text-white text-xs font-medium py-2 px-3 pr-8 rounded-xl focus:outline-none focus:border-[#ccff00] cursor-pointer appearance-none"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Name">Name</option>
                <option value="Rating">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                ▼
              </div>
            </div>
          </div>

        </div>

        {/* Empty State Card Area */}
        <div className="w-full border-2 border-dashed border-[#27272a] bg-[#18181b]/40 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-bold tracking-wide uppercase text-white mb-2">
            NOTHING HERE YET
          </h2>
          <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="bg-[#ccff00] hover:bg-[#b3e000] text-black text-xs font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-[#ccff00]/10 cursor-pointer"
          >
            Go to workouts
          </Link>
        </div>

      </main>

    </div>
  );
}

// Reusable Metric Card Component
function MetricCard({ label, value }) {
  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col justify-between">
      <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
        {label}
      </span>
      <span className="text-3xl md:text-4xl font-black text-white mt-4">
        {value}
      </span>
    </div>
  );
}