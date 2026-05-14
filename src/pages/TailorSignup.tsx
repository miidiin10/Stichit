import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Scissors, DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function TailorSignup() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!user) {
      await signIn();
    }
    // In a real app we'd update the user role in Firestore here
    // For now we simulate an upgrade or redirect
    navigate('/tailor-dashboard');
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-[#0A0A0A]">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left side content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#333] mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Now Accepting Applications</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif italic text-white mb-6">
            Turn your <span className="text-amber-500 not-italic uppercase font-sans font-bold tracking-tighter">craft</span> into an amazing business.
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            Join the Stitchit network and connect with clients looking for custom bespoke suits, elegant dresses, and high-quality alterations. Be your own boss, set your own schedule, and earn what you deserve.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141414] border border-[#2A2A2A] rounded-sm">
                <DollarSign className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Guaranteed Earnings</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Payments are held securely before you even start cutting the fabric.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141414] border border-[#2A2A2A] rounded-sm">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Total Flexibility</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Take on projects only when you have the time and capacity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side form block */}
        <div className="w-full lg:w-[480px]">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-8 shadow-2xl">
            <h2 className="text-xl font-serif italic text-white mb-2">Apply as a Tailor</h2>
            <p className="text-xs text-gray-500 mb-8">Start your journey with Stitchit today.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={user?.displayName || ''}
                  className="w-full bg-[#0A0A0A] border border-[#333] text-white text-sm rounded-sm py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Master Tailor"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Location/City</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0A0A0A] border border-[#333] text-white text-sm rounded-sm py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="E.g., London, UK"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Specialties</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 p-3 border border-[#333] bg-[#0A0A0A] rounded-sm cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="checkbox" className="accent-amber-500" />
                    <span className="text-xs text-gray-300">Bespoke Suits</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-[#333] bg-[#0A0A0A] rounded-sm cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="checkbox" className="accent-amber-500" />
                    <span className="text-xs text-gray-300">Dresses</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-[#333] bg-[#0A0A0A] rounded-sm cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="checkbox" className="accent-amber-500" />
                    <span className="text-xs text-gray-300">Alterations</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-[#333] bg-[#0A0A0A] rounded-sm cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="checkbox" className="accent-amber-500" />
                    <span className="text-xs text-gray-300">Bridal</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-4 bg-amber-600 text-black font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors rounded-sm shadow-lg gap-2"
                >
                  {user ? "Submit Application" : "Sign in & Apply"}
                </button>
                <p className="text-center text-[10px] text-gray-600 mt-4">
                  By applying, you agree to our Terms of Service for Professionals.
                </p>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
