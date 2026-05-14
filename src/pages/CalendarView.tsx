import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, User } from 'lucide-react';

export default function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Simplified calendar for visual demo
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); 
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white mb-2 flex items-center gap-3">
             <CalendarIcon className="w-8 h-8 text-amber-500" /> My Calendar
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">October 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-[#333] bg-[#141414] text-gray-400 hover:text-white rounded-sm"><ChevronLeft className="w-5 h-5"/></button>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-colors">Today</button>
          <button className="p-2 border border-[#333] bg-[#141414] text-gray-400 hover:text-white rounded-sm"><ChevronRight className="w-5 h-5"/></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm overflow-hidden">
            <div className="grid grid-cols-7 border-b border-[#2A2A2A] text-center">
              {days.map(d => (
                <div key={d} className="py-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 border-l border-t border-[#2A2A2A]">
              {dates.map((d, i) => (
                <div key={i} className={`min-h-[100px] border-r border-b border-[#2A2A2A] p-2 ${d <= 0 || d > 31 ? 'bg-[#0A0A0A] text-gray-700' : 'bg-[#141414] text-gray-300'} ${d === 24 ? 'bg-amber-600/10 border border-amber-500 z-10' : ''}`}>
                  <span className={`text-xs font-bold ${d === 24 ? 'bg-amber-600 text-black w-6 h-6 flex items-center justify-center rounded-full' : ''}`}>
                    {d > 0 && d <= 31 ? d : (d <= 0 ? 30 + d : d - 31)}
                  </span>
                  {d === 24 && (
                    <div className="mt-2 bg-[#0A0A0A] border border-amber-500/50 rounded-sm p-1.5 text-[9px] uppercase tracking-widest text-amber-500 truncate cursor-pointer hover:bg-amber-500/10">
                      Fitting: Sarah M.
                    </div>
                  )}
                  {d === 28 && (
                     <div className="mt-2 bg-[#1A1A1A] border border-[#333] rounded-sm p-1.5 text-[9px] uppercase tracking-widest text-gray-400 truncate cursor-pointer hover:text-white">
                     Delivery: John D.
                   </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] mb-6 pb-4 border-b border-[#2A2A2A]">Upcoming Events</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-[#333]">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[1.5px] top-1"></div>
                <h3 className="text-white font-serif italic text-lg mb-1">First Fitting - Bespoke Suit</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><Clock className="w-3 h-3" /> Oct 24 • 10:00 AM</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#0A0A0A] p-2 rounded-sm border border-[#333]">
                  <User className="w-4 h-4 text-amber-500" /> Sarah M.
                </div>
              </div>
              <div className="relative pl-6 border-l border-[#333]">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[1.5px] top-1"></div>
                <h3 className="text-gray-300 font-serif italic text-lg mb-1">Final Delivery</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><Clock className="w-3 h-3" /> Oct 28 • 2:00 PM</p>
                 <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#0A0A0A] p-2 rounded-sm border border-[#333]">
                  <User className="w-4 h-4 text-amber-500" /> John D.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
