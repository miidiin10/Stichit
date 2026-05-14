import React from 'react';
import { useParams, Link } from 'react-router';
import { Package, MapPin, Calendar, CreditCard, ChevronRight, CheckCircle2, CircleDashed } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function OrderDetails() {
  const { id } = useParams();
  const { profile } = useAuth();
  
  // This would typically come from Firestore
  const isTailor = profile?.role === 'tailor';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">
        <Link to="/orders" className="hover:text-amber-500 transition-colors">Orders</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-white">Order {id || '#14992'}</span>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-[#2A2A2A] pb-6 gap-4">
         <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-serif italic text-white flex justify-center items-center gap-3">
                <Package className="w-7 h-7 text-amber-500" />
                Custom Bespoke Suit
              </h1>
              <span className="bg-amber-600/10 border border-amber-500 text-amber-500 text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm">In Progress</span>
            </div>
            <p className="text-sm text-gray-400">Order ID: {id || '14992-ABC'} • Placed on Oct 10, 2026</p>
         </div>
         <div className="text-left md:text-right">
           <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Total Fixed Price</p>
           <p className="text-2xl font-serif text-white">£650.00</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main tracking area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 shadow-xl">
             <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] mb-8">Order Timeline</h2>
             
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-[#333] before:to-[#333]">
               
               {/* Step 1 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#141414] bg-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -mb-2">
                     <CheckCircle2 className="w-3 h-3 text-black" />
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#1A1A1A] border border-amber-500/50 p-4 rounded-sm shadow ml-8 md:ml-0">
                     <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-white">Order Confirmed</h4>
                        <time className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Oct 10</time>
                     </div>
                     <p className="text-xs text-gray-400">Payment secured in escrow. Requirements sent.</p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#141414] bg-[#0A0A0A] border-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -mb-2">
                     <CircleDashed className="w-3 h-3 text-amber-500 animate-spin-slow" />
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#1A1A1A] border border-[#333] p-4 rounded-sm shadow ml-8 md:ml-0 group-odd:bg-[#0A0A0A]">
                     <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-amber-500">First Fitting</h4>
                        <time className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Oct 24</time>
                     </div>
                     <p className="text-xs text-gray-400">Scheduled for 10:00 AM at the studio.</p>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-50">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#141414] bg-[#333] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -mb-2"></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#1A1A1A] border border-[#333] p-4 rounded-sm shadow ml-8 md:ml-0">
                     <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-white">Final Alterations</h4>
                     </div>
                     <p className="text-xs text-gray-400">Pending fitting completion.</p>
                  </div>
               </div>

             </div>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 shadow-xl">
             <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] mb-4">Measurement Profile Used</h2>
             <div className="bg-[#0A0A0A] border border-[#333] rounded-sm p-4 text-xs font-mono text-gray-400 mb-4 h-32 overflow-y-auto">
               {"{\n  \"chest\": \"38 in\",\n  \"waist\": \"32 in\",\n  \"inseam\": \"30 in\",\n  \"shoulder\": \"18 in\",\n  \"sleeve\": \"25 in\",\n  \"fabric\": \"Navy Worsted Wool\",\n  \"lining\": \"Burgundy Silk\"\n}"}
             </div>
             <p className="text-[10px] text-gray-500 italic">This data was securely provided during request initiation.</p>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm shadow-xl p-6">
             <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] mb-4 text-center">{isTailor ? 'Client Info' : 'Tailor Info'}</h2>
             <div className="flex flex-col items-center mb-6">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${isTailor ? 'client1' : 'tailor1'}`} alt="Avatar" className="w-20 h-20 rounded-full border border-[#333] bg-[#0A0A0A] mb-3" />
               <h3 className="font-serif italic text-white text-lg">{isTailor ? 'Sarah M.' : 'Artisan Tailor 1'}</h3>
               <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> London, UK</p>
             </div>
             <Link to="/messages" className="w-full flex justify-center items-center px-4 py-3 bg-[#1A1A1A] border border-[#333] rounded shadow-sm text-[10px] font-bold text-white hover:bg-white hover:text-black uppercase tracking-widest transition-colors mb-4">
               Message
             </Link>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] rounded-sm p-6 shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2"><CreditCard className="w-4 h-4 text-amber-500" /> Payment Summary</h2>
            <div className="space-y-3 pt-2 text-sm text-gray-400">
               <div className="flex justify-between">
                 <span>Base Price</span>
                 <span>£600.00</span>
               </div>
               <div className="flex justify-between">
                 <span>Premium Fabric</span>
                 <span>£50.00</span>
               </div>
               <div className="flex justify-between pb-3 border-b border-[#333]">
                 <span>Platform Fee (Escrow)</span>
                 <span>{isTailor ? '-£20.00' : '£0.00'}</span>
               </div>
               <div className="flex justify-between font-bold text-white pt-2">
                 <span>Total {isTailor ? 'Earnings' : 'Paid'}</span>
                 <span className="text-amber-500">£{isTailor ? '630.00' : '650.00'}</span>
               </div>
            </div>
            {!isTailor && (
              <div className="mt-6 flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-sm">
                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                 <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-1">Funds Secured</p>
                   <p className="text-[10px] text-gray-400 leading-tight">Your payment is held in escrow and will only be released when you confirm satisfaction.</p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
