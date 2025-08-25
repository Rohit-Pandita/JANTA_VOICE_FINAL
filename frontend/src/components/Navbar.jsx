// src/components/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <div>


      <nav className="bg-gradient-to-r from-[#00A651] to-[#059669] text-white px-4 py-3 flex items-center justify-between shadow-xl border-b-2 border-[#FF6F00] relative overflow-hidden">

        {/* Left section: Logo + Text (Clickable to Home) */}
        <a href="/" className="flex items-center space-x-4 relative z-10 cursor-pointer">
          {/* Main Logo */}
          <div className="relative group">
            <img
              src="/images/JantaVoiceLogo.png"
              className="h-16 w-22 object-contain bg-transparent group-hover:scale-105 transition-all duration-300 m-0"
              alt="Janta Voice Logo"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>

          {/* Text Logo + Tagline */}
          <div className="flex flex-col justify-center">
            <img
              src="/images/JantaVoiceText.png"
              className="h-10 object-contain drop-shadow-2xl"
              alt="Janta Voice"
              style={{ maxWidth: '200px' }}
            />
            <p className="text-xs text-white/80 font-medium tracking-wide drop-shadow-lg mt-1 pl-4">
              आपकी शिकायत हमारा समाधान
            </p>

          </div>
        </a>


        {/* Right section: Navigation Links */}
        <div className="hidden md:flex items-center space-x-2 relative z-10">
          <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
            <a
              href="/schemes"
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 border border-transparent hover:border-white/30 group"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">📋</span>
                <span>योजनाएं | Schemes</span>
              </span>
            </a>

            <a
              href="/acts"
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 border border-transparent hover:border-white/30 group"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">⚖</span>
                <span>अधिनियम | Acts</span>
              </span>
            </a>

            <a
              href="/policies"
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 border border-transparent hover:border-white/30 group"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span>आवाज़</span>
              </span>
            </a>

            <a
              href="/help"
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 border border-transparent hover:border-white/30 group"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">❓</span>
                <span>सहायता | Helplines</span>
              </span>
            </a>
          </div>

          {/* Track Status button */}
          <div className="flex justify-end items-center px-10">
            <a
              href="/trackstatus"
              className="bg-gradient-to-r from-orange-400 to-orange-600 
                         hover:from-orange-600 hover:to-orange-700 
                         px-5 py-2.5 rounded-xl text-sm font-semibold text-white 
                         transition-all duration-300 shadow-md 
                         hover:shadow-orange-500/30 transform hover:scale-105 
                         border border-orange-400 hover:border-orange-300 
                         relative overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r 
                              from-transparent via-white/20 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] 
                              transition-transform duration-700"></div>

              <span className="flex items-center gap-2 relative z-10">
                <span className="text-lg group-hover:rotate-12 transition-transform duration-300">🔍</span>
                <span>स्थिति देखें</span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative z-10">
          <button className="text-white p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;