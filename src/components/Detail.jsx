import React from 'react';

export default function FitLogDetailsPage() {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] min-h-screen font-sans flex flex-col justify-between selection:bg-[#CCFF00] selection:text-black">
      
      {/* Top Header Navigation */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#222222] bg-[#121212]">
        <div className="flex items-center space-x-2">
          {/* Logo with Dumbbell Icon */}
          <div className="flex items-center space-x-1.5 cursor-pointer">
            <div className="text-[#CCFF00]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 6.5h11M6.5 17.5h11M3 10h2v4H3zM19 10h2v4h-2zM5 8h2v8H5zM17 8h2v8h-2z"/>
              </svg>
            </div>
            <span className="font-black text-white text-sm tracking-widest">FITLOG</span>
          </div>
        </div>

        <nav className="flex items-center space-x-8 text-xs font-medium">
          <button className="text-[#888888] hover:text-[#CCFF00] transition-colors">Workouts</button>
          <button className="text-[#888888] hover:text-[#CCFF00] transition-colors">My Plan</button>
        </nav>

        <div className="flex items-center space-x-6 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-[#888888]">Plan</span>
            <span className="bg-[#CCFF00] text-black font-bold px-1.5 py-0.5 rounded text-[10px]">0</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#888888]">Saved</span>
            <span className="bg-[#1E1E1E] border border-[#2A2A2A] text-white font-bold px-1.5 py-0.5 rounded text-[10px]">0</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-10 w-full flex-1">
        
        {/* Label Breadcrumb / View Indicator */}
        <div className="text-xs text-[#666666] font-semibold mb-6 tracking-wide">
          Details Page
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3D Character Workout Image */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#222222] bg-[#181818] shadow-2xl h-[460px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80" 
                alt="Barbell Bench Press 3D" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Title, Tags, Specifications & Instructions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Description */}
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                BARBELL BENCH PRESS
              </h1>
              <p className="text-xs md:text-sm text-[#888888] mt-2.5 leading-relaxed">
                A compound press that builds chest thickness, triceps, and pressing power from a stable bench.
              </p>
            </div>

            {/* Neon Green Tag Pills */}
            <div className="flex items-center space-x-2">
              <span className="bg-[#CCFF00] text-black text-[11px] font-extrabold px-3 py-1 rounded tracking-wide uppercase">
                Chest
              </span>
              <span className="bg-[#CCFF00] text-black text-[11px] font-extrabold px-3 py-1 rounded tracking-wide uppercase">
                Arms
              </span>
            </div>

            {/* Metadata Stats Table */}
            <div className="bg-[#171A21] border border-[#212630] rounded-xl overflow-hidden divide-y divide-[#212630]">
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">EQUIPMENT</span>
                <span className="font-medium text-[#E5E7EB]">Barbell, Bench</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">DIFFICULTY</span>
                <span className="font-medium text-[#E5E7EB]">Intermediate</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">SETS</span>
                <span className="font-medium text-[#E5E7EB]">4</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">REPS</span>
                <span className="font-medium text-[#E5E7EB]">6-8</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">DURATION</span>
                <span className="font-medium text-[#E5E7EB]">25 min</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">CALORIES</span>
                <span className="font-medium text-[#E5E7EB]">180 kcal</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 text-xs">
                <span className="text-[#6B7280] uppercase tracking-wider font-semibold text-[11px]">RATING</span>
                <span className="font-medium text-[#E5E7EB]">4.8</span>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                INSTRUCTIONS
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#9CA3AF] leading-relaxed">
                <li>Lie on the bench with eyes under the bar and feet planted.</li>
                <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
                <li>Press up in a slight arc until elbows lock without bouncing.</li>
                <li>Keep shoulder blades pinched and a natural arch in the back.</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <button className="flex-1 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#CCFF00]/10 flex items-center justify-center space-x-2">
                <span>📅 Add to today's plan</span>
              </button>
              <button className="bg-[#1A1E26] hover:bg-[#222732] text-[#D1D5DB] font-semibold py-3 px-5 rounded-xl text-xs border border-[#2D3442] transition-all">
                Save for later
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#222222] py-5 px-8 flex items-center justify-between text-xs text-[#666666] bg-[#121212]">
        <div className="flex items-center space-x-1.5">
          <div className="text-[#CCFF00]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 6.5h11M6.5 17.5h11M3 10h2v4H3zM19 10h2v4h-2zM5 8h2v8H5zM17 8h2v8h-2z"/>
            </svg>
          </div>
          <span className="font-black text-white text-xs tracking-widest">FITLOG</span>
        </div>
        <div>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </footer>

    </div>
  );
}