"use client";

import { useState } from "react";
import Image from "next/image";

export default function WorkoutDetailsPage() {
  // Sample data matching the screenshot exactly
  const [workout] = useState({
    id: 1,
    name: "BARBELL BENCH PRESS",
    description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    image: "/banner.png", // Replace with your image path or external URL
    muscleGroups: ["Chest", "Arms"],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    sets: 4,
    reps: "6–8",
    duration: "25 min",
    calories: "180 kcal",
    rating: "4.8",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  });

  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workout Image Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#262626] shadow-2xl">
              {/* If using an external URL, use standard <img> or configure next.config.js domains */}
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
                alt={workout.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Details & Specs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Title & Description */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              {workout.name}
            </h1>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specifications Table Card */}
            <div className="mt-6 bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden divide-y divide-[#27272a]">
              <SpecRow label="EQUIPMENT" value={workout.equipment} />
              <SpecRow label="DIFFICULTY" value={workout.difficulty} />
              <SpecRow label="SETS" value={workout.sets} />
              <SpecRow label="REPS" value={workout.reps} />
              <SpecRow label="DURATION" value={workout.duration} />
              <SpecRow label="CALORIES" value={workout.calories} />
              <SpecRow label="RATING" value={workout.rating} />
            </div>

            {/* Instructions Section */}
            <div className="mt-8">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
                Instructions
              </h2>
              <ol className="space-y-3">
                {workout.instructions.map((step, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-3 leading-relaxed">
                    <span className="font-semibold text-gray-400 min-w-[14px]">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
              <button
                onClick={() => setAdded(!added)}
                className="bg-[#ccff00] hover:bg-[#b3e000] text-black text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#ccff00]/10 flex items-center gap-2 cursor-pointer"
              >
                <span>✓</span> {added ? "Added to Today's Plan" : "Add to today's plan"}
              </button>

              <button
                onClick={() => setSaved(!saved)}
                className="bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>♡</span> {saved ? "Saved" : "Save for later"}
              </button>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}

// Reusable Table Row Component for Stats
function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 text-xs">
      <span className="font-medium text-gray-400 tracking-wider">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}