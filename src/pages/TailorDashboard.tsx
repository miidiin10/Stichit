import React, { useState } from 'react';
import { Power, Wallet, TrendingUp, Scissors, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router';

export default function TailorDashboard() {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(false);
  
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Header / Online Toggle */}
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-[#333] bg-[#0A0A0A] overflow-hidden flex-shrink-0">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} alt="Tailor avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-serif italic text-white leading-tight">Welcome, {user.displayName}</h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">London, UK • Master Level</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-4">
            <div className="flex gap-2">
               <Link to="/calendar" className="px-3 py-1.5 bg-[#1A1A1A] border border-[#333] rounded-sm text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors">Calendar</Link>
               <Link to="/payments" className="px-3 py-1.5 bg-[#1A1A1A] border border-[#333] rounded-sm text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors">Payments</Link>
            </div>
            
            <div className="flex flex-col items-center sm:items-end">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`relative inline-flex h-12 w-32 items-center justify-center rounded-sm transition-all focus:outline-none ${isOnline ? 'bg-green-500/10 border border-green-500/50' : 'bg-[#1A1A1A] border border-[#333]'}`}
              >
                <span className={`absolute left-2 flex h-8 w-8 items-center justify-center rounded-sm transition-transform duration-300 ease-in-out ${isOnline ? 'translate-x-[72px] bg-green-500' : 'translate-x-0 bg-gray-500'}`}>
                  <Power className={`h-4 w-4 ${isOnline ? 'text-black' : 'text-white'}`} />
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest pl-12 pr-4 transition-colors ${isOnline ? 'text-green-500 opacity-100' : 'opacity-0'}`}>Online</span>
                <span className={`absolute text-[10px] font-bold uppercase tracking-widest pr-8 pl-4 transition-colors ${!isOnline ? 'text-gray-400 opacity-100' : 'opacity-0'}`}>Offline</span>
              </button>
              <p className="text-[10px] text-gray-600 mt-2 text-center sm:text-right">
                {isOnline ? 'You are visible to new clients.' : 'Go online to accept new jobs.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Stats & Financials */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] rounded-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Wallet className="w-5 h-5 text-amber-500" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-white">Earnings</h2>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#333]">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Today</p>
                  <p className="text-3xl font-serif italic text-white flex items-baseline gap-2">£140.00 <span className="text-xs not-italic font-sans text-green-500/80 tracking-widest uppercase"> <TrendingUp className="w-3 h-3 inline pb-0.5" /> +12%</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">This Week</p>
                  <p className="text-xl font-serif text-white">£850.00</p>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Weekly Objectives</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    <span>Measurements Completed</span>
                    <span className="text-amber-500">4 / 5</span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] border border-[#333] h-1.5 rounded-none">
                    <div className="bg-amber-500 h-1.5 rounded-none" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    <span>Acceptance Rate</span>
                    <span className="text-amber-500">92%</span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] border border-[#333] h-1.5 rounded-none">
                    <div className="bg-amber-500 h-1.5 rounded-none" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Incoming / Active Jobs */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Incoming Request Overlay / Section */}
            {isOnline && (
              <div className="bg-amber-600/5 border border-amber-500 rounded-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </span>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500">New Request Nearby</h2>
                </div>
                
                <div className="bg-[#0A0A0A] border border-[#333] rounded-sm p-5 relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <h3 className="text-lg font-serif italic text-white flex items-center gap-2 mb-1">
                      Bespoke Suit Consultation
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3 h-3" /> Mayfair, London (2.5 mi away)
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="bg-[#1A1A1A] px-2 py-1 rounded-sm border border-[#333]">Client: Sarah M.</span>
                      <span className="bg-[#1A1A1A] px-2 py-1 rounded-sm border border-[#333] font-bold text-amber-500/80">Est. £650</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none p-3 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-sm transition-colors flex justify-center items-center">
                      <XCircle className="w-5 h-5" />
                    </button>
                    <button className="flex-1 sm:flex-none px-6 py-3 bg-amber-600 font-bold uppercase tracking-widest text-[10px] text-black hover:bg-amber-500 rounded-sm transition-colors flex justify-center items-center gap-2 flex-grow">
                      <CheckCircle className="w-4 h-4" /> Accept Job
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm overflow-hidden">
              <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white">Active Projects</h2>
                <span className="text-[10px] bg-[#1A1A1A] text-gray-400 border border-[#333] px-2 py-1 rounded-sm">3 Ongoing</span>
              </div>
              <ul className="divide-y divide-[#2A2A2A]">
                {[1, 2].map((job) => (
                  <li key={job} className="p-6 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Scissors className="w-4 h-4 text-amber-500" />
                          <h3 className="text-lg font-serif italic text-gray-300 group-hover:text-white transition-colors">Evening Gown Alteration</h3>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 pl-6 mb-3">Target Date: Oct 24th • Fitting #1 Done</p>
                      </div>
                      <div className="text-right sm:ml-auto w-full sm:w-auto">
                        <p className="text-sm font-bold text-amber-500 mb-1">£120.00</p>
                      </div>
                    </div>
                    
                    <div className="pl-0 sm:pl-6 mt-2 flex items-center justify-between">
                       <div className="flex-1 mr-4">
                         <div className="w-full bg-[#0A0A0A] border border-[#333] h-1.5 rounded-none">
                           <div className="bg-amber-600/80 h-1.5 rounded-none" style={{ width: job === 1 ? '40%' : '80%' }}></div>
                         </div>
                       </div>
                       <button className="text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-widest border border-[#333] px-3 py-1.5 bg-[#0A0A0A] rounded-sm transition-colors whitespace-nowrap">
                         Update Status
                       </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
