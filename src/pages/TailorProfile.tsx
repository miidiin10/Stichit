import React from 'react';
import { useParams, Link } from 'react-router';
import { Star, MessageCircle, Ruler, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TailorProfile() {
  const { id } = useParams();
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#141414] rounded-sm border border-[#2A2A2A] overflow-hidden shadow-xl">
        <div className="h-48 bg-[#1A1A1A] relative border-b border-[#2A2A2A] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1593030761757-71fae4630b05?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="text-6xl text-[#333] font-serif opacity-30 tracking-widest absolute">STITCHIT</div>
        </div>
        
        <div className="px-6 sm:px-10 pb-10 relative">
          <div className="sm:flex sm:items-end sm:space-x-5 -mt-16 sm:-mt-24">
            <div className="relative inline-block">
               <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`} 
                  alt="Avatar" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#141414] bg-[#0A0A0A] object-cover shadow-lg" 
                />
            </div>
            <div className="mt-4 sm:mt-0 sm:flex-1 pt-4 sm:pt-6 pb-2 sm:pb-4 flex justify-between items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">Artisan Tailor {id?.split('_')[1]}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center text-xs text-gray-400 mt-2 gap-2 sm:gap-4 uppercase tracking-widest">
                  <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-gray-500" /> London, UK</span>
                  <span className="flex items-center text-amber-500"><CheckCircle className="w-3 h-3 mr-1 text-amber-500" /> Verified</span>
                  <span className="flex items-center"><Star className="w-3 h-3 mr-1 text-amber-500 fill-current" /> 4.9 (128 reviews)</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <button className="inline-flex items-center px-6 py-2 border border-transparent rounded shadow-sm text-[11px] font-bold text-black uppercase tracking-widest bg-amber-600 hover:bg-amber-500 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="sm:hidden mt-6">
             <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded shadow-sm text-[11px] font-bold text-black uppercase tracking-widest bg-amber-600 hover:bg-amber-500">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Tailor
             </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
               <section>
                 <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">About the Tailor</h2>
                 <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light">
                   I am a passionate tailor with over a decade of experience crafting bespoke suits, elegant dresses, and performing intricate alterations. I believe that clothing should be a perfect reflection of your personality and body. I source only the finest fabrics and pay meticulous attention to every stitch, ensuring you walk away with a piece you'll love for years.
                 </p>
               </section>
               
               <section>
                 <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Portfolio</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {[1, 2, 3, 4, 5, 6].map(i => (
                     <div key={i} className="aspect-w-1 aspect-h-1 rounded-sm overflow-hidden bg-[#0A0A0A] border border-[#2A2A2A]">
                        <img src={`https://images.unsplash.com/photo-1593030761757-71fae4630b05?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&seed=${i}`} className="object-cover w-full h-48 opacity-80 hover:opacity-100 transition-opacity" alt="Work sample" />
                     </div>
                   ))}
                 </div>
               </section>

               <section>
                 <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Services & Pricing</h2>
                 <ul className="space-y-0">
                    <li className="flex justify-between items-center py-4 border-b border-[#2A2A2A]">
                      <div>
                        <p className="font-serif italic text-white text-lg">Bespoke Suit</p>
                        <p className="text-xs text-gray-500 mt-1">Full custom suit tailored to your measurements.</p>
                      </div>
                      <span className="font-bold text-amber-500 tracking-widest">From £650</span>
                    </li>
                    <li className="flex justify-between items-center py-4 border-b border-[#2A2A2A]">
                      <div>
                        <p className="font-serif italic text-white text-lg">Custom Dress</p>
                        <p className="text-xs text-gray-500 mt-1">Perfectly fitted evening or cocktail dress.</p>
                      </div>
                      <span className="font-bold text-amber-500 tracking-widest">From £350</span>
                    </li>
                    <li className="flex justify-between items-center py-4 border-b border-[#2A2A2A]">
                      <div>
                        <p className="font-serif italic text-white text-lg">Basic Alteration</p>
                        <p className="text-xs text-gray-500 mt-1">Hemming, taking in, or letting out.</p>
                      </div>
                      <span className="font-bold text-amber-500 tracking-widest">From £40</span>
                    </li>
                 </ul>
               </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-sm p-6 border border-[#2A2A2A]">
                <h3 className="font-serif italic text-white text-xl mb-2">Start an Order</h3>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">Describe what you're looking for, or schedule a fitting to get measured.</p>
                
                {user ? (
                   <Link to={`/checkout/${id}`} className="w-full flex justify-center items-center px-4 py-3 border border-amber-600 rounded shadow-sm text-xs font-bold text-amber-500 hover:bg-amber-600 hover:text-black uppercase tracking-widest transition-colors mb-4">
                     <Ruler className="w-4 h-4 mr-2" /> Request Order
                   </Link>
                ) : (
                   <button className="w-full flex justify-center items-center px-4 py-3 border border-[#333] rounded shadow-sm text-xs font-bold text-gray-400 bg-[#1A1A1A] hover:bg-white hover:text-black uppercase tracking-widest transition-colors mb-4">
                     Sign in to Request
                   </button>
                )}
              </div>

              <div className="bg-[#1A1A1A] rounded-sm p-6 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold uppercase tracking-widest text-[#E0E0E0] text-xs">Stitchit Guarantee</h3>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                  Your payments are protected. We securely hold the money until your garment is fitted properly and you confirm satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
