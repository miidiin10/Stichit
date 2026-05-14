import React, { useState } from 'react';
import { MapPin, Scissors, Star, Filter } from 'lucide-react';
import { Link } from 'react-router';

interface Tailor {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  services: string[];
  description: string;
}

const MOCK_TAILORS: Tailor[] = [
  { 
    id: 1, 
    name: 'Artisan Tailor 1', 
    location: 'London, UK', 
    rating: 4.9, 
    reviews: 128, 
    services: ['Suits', 'Alterations', 'Dresses'], 
    description: 'Specializing in bespoke suits, wedding dresses, and high-end alterations. Over 10 years of experience crafting custom garments with meticulous attention to detail.' 
  },
  { 
    id: 2, 
    name: 'Savile Row Masters', 
    location: 'London, UK', 
    rating: 5.0, 
    reviews: 342, 
    services: ['Suits'], 
    description: 'Traditional British tailoring with a focus on heritage techniques. We create suits that last a lifetime, using only the finest wools and silks.' 
  },
  { 
    id: 3, 
    name: 'Modern Stitch', 
    location: 'Manchester, UK', 
    rating: 4.7, 
    reviews: 56, 
    services: ['Alterations', 'Dresses'], 
    description: 'Contemporary alterations and custom dresses designed for the modern wardrobe. Quick turnaround times and precise fits.' 
  },
  { 
    id: 4, 
    name: 'Classic Cuts', 
    location: 'Paris, FR', 
    rating: 4.8, 
    reviews: 89, 
    services: ['Suits', 'Alterations'], 
    description: 'Parisian style and elegant cuts. We blend classic silhouettes with modern comfort. Drop by for a consultation.' 
  },
  {
    id: 5,
    name: 'Hem & Trim',
    location: 'New York, USA',
    rating: 4.5,
    reviews: 24,
    services: ['Alterations'],
    description: 'Quick, reliable, and professional alterations for everyday wear and formal attire.'
  }
];

export default function TailorList() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);

  const locations = Array.from(new Set(MOCK_TAILORS.map(t => t.location))).sort();
  const allServices = Array.from(new Set(MOCK_TAILORS.flatMap(t => t.services))).sort();

  const filteredTailors = MOCK_TAILORS.filter(t => {
    if (selectedLocation && t.location !== selectedLocation) return false;
    if (selectedService && !t.services.includes(selectedService)) return false;
    if (t.rating < minRating) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 border-b border-[#2A2A2A] pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white mb-2">Master Tailors</h1>
          <p className="text-sm italic text-gray-500">Discover top-rated artisans crafting custom bespoke pieces.</p>
        </div>
      </div>

      <div className="mb-10 bg-[#141414] border border-[#2A2A2A] rounded-sm p-4 sm:p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-amber-500" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0]">Filter Results</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Location</label>
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-[#333] text-white text-xs rounded-sm py-2 px-3 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Service</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-[#333] text-white text-xs rounded-sm py-2 px-3 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Services</option>
              {allServices.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Min Rating</label>
            <select 
              value={minRating} 
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full bg-[#0A0A0A] border border-[#333] text-white text-xs rounded-sm py-2 px-3 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value={0}>Any Rating</option>
              <option value={4.0}>4.0+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
              <option value={4.8}>4.8+ Stars</option>
            </select>
          </div>
        </div>
      </div>

      {filteredTailors.length === 0 ? (
        <div className="text-center py-20 bg-[#141414] border border-[#2A2A2A] rounded-sm">
          <Scissors className="w-12 h-12 text-gray-600 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-serif italic text-white mb-2">No tailors found</h3>
          <p className="text-sm text-gray-500">Try adjusting your filters to find more professionals.</p>
          <button 
            onClick={() => { setSelectedLocation(''); setSelectedService(''); setMinRating(0); }}
            className="mt-6 px-4 py-2 bg-[#1A1A1A] border border-[#333] text-xs uppercase tracking-widest text-white hover:border-amber-500 transition-colors rounded-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTailors.map((tailor) => (
             <div key={tailor.id} className="bg-[#141414] border border-[#2A2A2A] rounded-sm shadow-xl flex overflow-hidden group">
              <div className="hidden sm:flex w-40 bg-[#1A1A1A] items-center justify-center border-r border-[#2A2A2A]">
                 <div className="text-4xl opacity-20 text-gray-400 font-serif">裁缝</div>
              </div>
              <div className="flex-1 p-5 relative">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-serif italic text-white flex items-center gap-3">
                       <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=tailor${tailor.id}`} 
                        alt="Avatar" 
                        className="w-8 h-8 rounded-full border border-[#333] bg-[#0A0A0A] object-cover sm:hidden" 
                      />
                      {tailor.name}
                    </h3>
                    <p className="text-[10px] text-amber-600 uppercase tracking-widest mt-1">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {tailor.location}
                    </p>
                  </div>
                  <div className="text-right font-serif">
                    <p className="text-sm text-white">{tailor.rating.toFixed(1)} <Star className="w-3 h-3 inline text-amber-500 fill-current mb-1" /></p>
                    <p className="text-[10px] text-gray-500 mt-1">{tailor.reviews} Reviews</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4 mt-2">
                  {tailor.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 mb-6">
                  {tailor.services.map(service => (
                    <span key={service} className="inline-flex items-center px-2 py-0.5 border border-[#333] text-[9px] uppercase tracking-widest bg-[#1A1A1A] text-gray-400">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link to={`/tailors/tailor_${tailor.id}`} className="flex-1 text-center py-2 bg-[#1A1A1A] border border-[#333] text-[10px] uppercase tracking-widest text-gray-300 hover:bg-white hover:text-black transition-all">
                    View Portfolio
                  </Link>
                  <Link to={`/tailors/tailor_${tailor.id}`} className="flex-1 text-center py-2 bg-amber-600 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
