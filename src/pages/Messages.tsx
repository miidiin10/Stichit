import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Send, Image as ImageIcon } from 'lucide-react';

export default function Messages() {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="p-8 max-w-7xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Sign in to view messages</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto md:px-8 py-6 h-[calc(100vh-140px)] flex">
      <div className="bg-[#0A0A0A] border text-left border-[#2A2A2A] rounded-sm shadow-xl flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-[#2A2A2A] flex flex-col bg-[#141414] hidden md:flex">
          <div className="p-5 border-b border-[#2A2A2A] bg-[#0F0F0F]">
            <h2 className="text-xl font-serif italic text-white tracking-tight">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
             <div className="p-5 border-b border-[#2A2A2A] bg-amber-600/5 cursor-pointer border-l-2 border-l-amber-500">
               <div className="flex items-center justify-between">
                 <h3 className="font-serif italic text-white text-lg">Artisan Tailor 1</h3>
                 <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">12:30 PM</span>
               </div>
               <p className="text-xs text-gray-400 line-clamp-1 mt-2">Hello! The sample fabrics have arrived.</p>
             </div>
             <div className="p-5 border-b border-[#2A2A2A] hover:bg-[#1A1A1A] cursor-pointer transition-colors border-l-2 border-l-transparent">
               <div className="flex items-center justify-between">
                 <h3 className="font-serif italic text-gray-300 text-lg">Artisan Tailor 2</h3>
                 <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Yesterday</span>
               </div>
               <p className="text-xs text-gray-500 line-clamp-1 mt-2">I will check the order details.</p>
             </div>
          </div>
        </div>

        {/* Chat window */}
        <div className="flex-1 flex flex-col bg-[#0A0A0A]">
           <div className="p-5 border-b border-[#2A2A2A] flex items-center justify-between bg-[#0F0F0F]">
              <div className="flex items-center gap-4">
                <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=tailor1`} 
                    alt="Avatar" 
                    className="w-10 h-10 rounded-full border border-[#333] bg-[#0A0A0A] object-cover" 
                  />
                <div>
                  <h3 className="font-serif italic text-white text-lg">Artisan Tailor 1</h3>
                  <span className="text-[10px] text-amber-500/80 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Online
                  </span>
                </div>
              </div>
           </div>

           <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#0A0A0A]">
             <div className="flex justify-center">
               <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border border-[#2A2A2A] bg-[#141414] px-3 py-1 rounded">Today</span>
             </div>
             <div className="flex justify-end">
               <div className="bg-amber-600 text-black rounded rounded-tr-none px-5 py-3 max-w-md shadow-sm">
                 <p className="text-sm font-medium text-left">Hi, I'm checking if you received my measurements?</p>
               </div>
             </div>
             <div className="flex justify-start">
               <div className="bg-[#141414] border border-[#2A2A2A] text-gray-300 rounded rounded-tl-none px-5 py-3 max-w-md shadow-lg">
                 <p className="text-sm leading-relaxed">Hello! The sample fabrics have arrived and the measurements look perfect. I'll send photos shortly.</p>
               </div>
             </div>
           </div>

           <div className="p-4 bg-[#0F0F0F] border-t border-[#2A2A2A]">
             <div className="flex items-center gap-3">
               <button className="p-2.5 text-gray-500 hover:text-amber-500 transition-colors border border-transparent hover:border-[#333] rounded bg-[#1A1A1A]">
                 <ImageIcon className="w-5 h-5" />
               </button>
               <input 
                 type="text" 
                 placeholder="TYPE YOUR MESSAGE..." 
                 className="flex-1 border border-[#333] focus:border-amber-600 focus:ring-0 outline-none placeholder-gray-600 text-xs font-bold uppercase tracking-widest py-3 px-4 bg-[#141414] text-white rounded transition-colors"
               />
               <button className="p-2.5 bg-amber-600 text-black hover:bg-amber-500 transition-colors rounded shadow-sm border border-transparent">
                 <Send className="w-5 h-5" />
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
