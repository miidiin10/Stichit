/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TailorList from './pages/TailorList';
import TailorProfile from './pages/TailorProfile';
import Orders from './pages/Orders';
import Messages from './pages/Messages';
import TailorSignup from './pages/TailorSignup';
import TailorDashboard from './pages/TailorDashboard';
import OrderDetails from './pages/OrderDetails';
import CalendarView from './pages/CalendarView';
import Payments from './pages/Payments';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tailors" element={<TailorList />} />
          <Route path="/tailors/:id" element={<TailorProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tailor-signup" element={<TailorSignup />} />
          <Route path="/tailor-dashboard" element={<TailorDashboard />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<div className="p-8 text-center text-gray-500">Coming soon...</div>} />
        </Routes>
      </main>
      <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-12 text-center mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-xl font-serif tracking-widest text-[#333] mb-8">STITCHIT</div>
           <div className="flex gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
             <a href="mailto:support@stitchit.app" className="hover:text-amber-500 transition-colors">Contact Support</a>
             <a href="#" className="hover:text-amber-500 transition-colors">FAQ</a>
             <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
           </div>
           <div className="text-[10px] text-gray-600 uppercase tracking-widest">
             &copy; {new Date().getFullYear()} Stitchit. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
}


