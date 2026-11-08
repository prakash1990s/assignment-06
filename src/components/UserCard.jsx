

import React from 'react';

const UserCard = ({ user }) => {
    return (
      
        <div className="bg-black text-white rounded-2xl shadow-xl border font-sans">
    
      
      {/* Top Image Section */}
      <div>
       
        <img
          src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740  " 
          alt="Barbell Bench Press"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content Section */}
      <div className=" bg-black p-5">
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          <span className="bg-[#ccff00] text-black font-bold text-xs uppercase px-3 py-1 rounded-full">
            Chest
          </span>
          <span className="bg-[#ccff00] text-black font-bold text-xs uppercase px-3 py-1 rounded-full">
            Arms
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl font-extrabold tracking-wide uppercase text-white mb-1">
          Barbell Bench Press
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Barbell, Bench
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-4" />

        {/* Footer Metrics */}
        <div className="flex items-center gap-6 text-gray-300 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            
            <span>25 min</span>
          </div>
          <div className="flex items-center gap-1.5">
       
            <span>180 kcal</span>
          </div>
          <div className="flex items-center gap-1.5">
      
            <span>4.8</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UserCard;