import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserOptions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl w-full max-w-6xl p-12 border border-white/20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            अपनी शिकायत का विकल्प चुनें
          </h1>
          <p className="text-gray-600 text-lg">अपनी शिकायत दर्ज करने का सबसे आसान तरीका चुनें</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Voice Complaint */}
          <div
            onClick={() => navigate("/voice")}
            className="group relative bg-gradient-to-br from-white to-indigo-50/50 border-2 border-indigo-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-indigo-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎤
              </div>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 group-hover:text-indigo-800 transition-colors">
                आवाज़ शिकायत
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Speak your complaint in your language<br />
                <span className="text-sm font-medium text-indigo-600 mt-2 block">
                  बोलकर शिकायत दर्ज करें | आवाज़ेने तक्रार
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                शुरू करें
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Written Complaint */}
          <div
            onClick={() => navigate("/complaint")}
            className="group relative bg-gradient-to-br from-white to-green-50/50 border-2 border-green-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-green-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📝
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition-colors">
                लिखित शिकायत
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fill out a form and register complaint<br />
                <span className="text-sm font-medium text-green-600 mt-2 block">
                  लिखित शिकायत करें | लेखी तक्रार
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                शुरू करें
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Track Complaint */}
          <div
            onClick={() => navigate("/trackstatus")}
            className="group relative bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-amber-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🔍
              </div>
              <h2 className="text-2xl font-bold text-amber-700 mb-4 group-hover:text-amber-800 transition-colors">
                शिकायत ट्रैक करें
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Check current status of complaint<br />
                <span className="text-sm font-medium text-amber-600 mt-2 block">
                  शिकायत की स्थिति देखें | तक्रारी स्थिति
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                शुरू करें
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Women & Child Complaint (NEW) */}
          <div
            onClick={() => navigate("/women-child-complaint")}
            className="group relative bg-gradient-to-br from-white to-pink-50/50 border-2 border-pink-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-pink-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/5 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🚨
              </div>
              <h2 className="text-2xl font-bold text-pink-700 mb-4 group-hover:text-pink-800 transition-colors">
                आपातकालीन सहायता
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Special desk emergency complaints<br />
                <span className="text-sm font-medium text-pink-600 mt-2 block">
                 विशेष डेस्क - आपातकालीन शिकायत | आपातकालीन तक्रार
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                शुरू करें
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer help text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            मदद चाहिए? हमारी सहायता टीम 24/7 उपलब्ध है, आपकी शिकायत प्रक्रिया में मदद करने के लिए।
          </p>
        </div>
      </div>
    </div>
  );
}