import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Clock, Package, MessageCircle, ChevronRight, History } from 'lucide-react';
import { Link } from 'react-router';

export default function Orders() {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="p-8 max-w-7xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Sign in to view orders</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-[#2A2A2A] pb-6 flex justify-between items-end">
        <h1 className="text-3xl font-serif italic text-white flex items-center gap-3">My Orders</h1>
        <Link to="/payments" className="text-[10px] uppercase tracking-widest text-amber-500 hover:text-amber-400 font-bold flex items-center gap-1">
          Payment History <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] mb-4">Active Orders</h2>
        <div className="bg-[#141414] rounded-sm border border-[#2A2A2A] overflow-hidden shadow-xl">
          <ul className="divide-y divide-[#2A2A2A]">
            {[1, 2].map((order) => (
              <li key={order} className="p-6 sm:px-8 hover:bg-[#1A1A1A] transition-colors group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-lg font-serif italic text-white flex items-center gap-3 group-hover:text-amber-500 transition-colors">
                      <Package className="w-5 h-5 text-amber-500" />
                      Custom Bespoke Suit #{order}4992
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest pl-8">With Artisan Tailor {order}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-amber-500 tracking-widest">£850</p>
                      <p className="text-xs text-green-500/80 font-medium uppercase tracking-widest mt-1">Payment secured</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pl-0 sm:pl-8">
                  <div className="flex-1 w-full bg-[#0A0A0A] border border-[#333] rounded-sm h-1.5">
                      <div className="bg-amber-600 h-1.5 rounded-sm" style={{ width: order === 1 ? '70%' : '10%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest whitespace-nowrap">
                    {order === 1 ? 'Fitting Scheduled' : 'Pending Measurements'}
                  </span>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:pl-8">
                  <Link to={`/orders/${order}4992`} className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 bg-amber-600 text-black uppercase tracking-widest font-bold text-[10px] hover:bg-amber-500 rounded-sm shadow-sm transition-colors">
                    Tracker & Details
                  </Link>
                  <Link to="/messages" className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2.5 border border-[#333] bg-[#0A0A0A] text-gray-300 uppercase tracking-widest font-bold text-[10px] hover:bg-white hover:text-black rounded-sm transition-colors">
                    <MessageCircle className="w-4 h-4 mr-2" /> Contact
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2"><History className="w-4 h-4" /> Order History</h2>
        <div className="bg-[#0A0A0A] rounded-sm border border-[#2A2A2A] overflow-hidden shadow-xl">
          <ul className="divide-y divide-[#2A2A2A]">
            {[1].map((order) => (
               <li key={order} className="p-6 sm:px-8">
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h3 className="text-md font-serif italic text-gray-300">Custom Dress #{order}2811</h3>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Completed Aug 14, 2026 • Modern Stitch</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col items-end">
                      <p className="text-sm font-bold text-gray-400">£450.00</p>
                      <Link to={`/orders/${order}2811`} className="text-[10px] font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest mt-1">View Receipt</Link>
                    </div>
                 </div>
               </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
