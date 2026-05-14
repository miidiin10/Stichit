import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Scissors, Menu, X, LogOut, User, MessageCircle, ClipboardList, Bell } from 'lucide-react';

export default function Navbar() {
  const { user, profile, signIn, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: "Artisan Tailor 1 replied to a message.", time: "5m ago", unread: true },
    { id: 2, text: "Fitting scheduled for tomorrow at 10 AM.", time: "2h ago", unread: false },
    { id: 3, text: "Escrow payment secured for Suit Order.", time: "1d ago", unread: false },
  ];

  return (
    <nav className="bg-[#0F0F0F] border-b border-[#2A2A2A] top-0 sticky z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex flex-shrink-0 items-center gap-3">
              <div className="w-8 h-8 bg-amber-600 rounded-sm flex items-center justify-center font-serif font-bold text-black">S</div>
              <span className="text-xl font-serif tracking-widest text-amber-500 hidden sm:block">STITCHIT</span>
            </NavLink>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <NavLink to="/tailors" className={({isActive}) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-400 hover:border-[#333] hover:text-white'}`}>
                Find a Tailor
              </NavLink>
              {user && (
                <>
                  <NavLink to="/orders" className={({isActive}) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-400 hover:border-[#333] hover:text-white'}`}>
                    Orders
                  </NavLink>
                  <NavLink to="/messages" className={({isActive}) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-400 hover:border-[#333] hover:text-white'}`}>
                    Messages
                  </NavLink>
                  {profile?.role === 'tailor' && (
                    <NavLink to="/tailor-dashboard" className={({isActive}) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-400 hover:border-[#333] hover:text-white'}`}>
                      Dashboard
                    </NavLink>
                  )}
                </>
              )}
              {!user && (
                <NavLink to="/tailor-signup" className={({isActive}) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-400 hover:border-[#333] hover:text-white'}`}>
                  Become a Tailor
                </NavLink>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full border-2 border-[#0F0F0F]"></span>
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-[#141414] border border-[#2A2A2A] rounded-sm shadow-2xl py-2 z-50">
                      <div className="px-4 py-2 border-b border-[#2A2A2A] flex justify-between items-center">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#E0E0E0]">Notifications</h3>
                        <span className="text-[9px] text-amber-500 cursor-pointer hover:underline uppercase">Mark all read</span>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.map(notif => (
                          <div key={notif.id} className={`p-4 border-b border-[#2A2A2A] hover:bg-[#1A1A1A] cursor-pointer transition-colors ${notif.unread ? 'bg-amber-600/5' : ''}`}>
                            <div className="flex gap-3">
                              {notif.unread && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>}
                              <div>
                                <p className={`text-xs ${notif.unread ? 'text-white' : 'text-gray-400'}`}>{notif.text}</p>
                                <p className="text-[10px] text-gray-500 mt-1">{notif.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 text-center border-t border-[#2A2A2A]">
                         <span className="text-[10px] text-gray-400 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">View All Settings</span>
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-sm font-medium uppercase tracking-tighter text-gray-300">{profile?.displayName || user.displayName}</span>
                {profile?.role === 'tailor' && <span className="bg-[#1A1A1A] border border-[#333] text-amber-500 text-[10px] px-2 py-1 rounded tracking-widest uppercase font-bold">Tailor</span>}
                <button
                  onClick={logOut}
                  className="rounded-full bg-[#1A1A1A] border border-[#333] p-1.5 text-gray-400 hover:text-white hover:border-amber-600 transition-colors focus:outline-none"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={signIn}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded bg-amber-600 shadow-sm text-[11px] font-bold uppercase tracking-widest text-black hover:bg-amber-500 transition-colors focus:outline-none"
              >
                Sign in with Google
              </button>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-[#0C0C0C] border-b border-[#2A2A2A]">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink to="/tailors" className="bg-amber-600/10 border-amber-500 text-amber-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Find a Tailor
            </NavLink>
            {user && (
              <>
                <NavLink to="/orders" className="border-transparent text-gray-400 hover:bg-[#1A1A1A] hover:border-[#333] hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Orders
                </NavLink>
                <NavLink to="/messages" className="border-transparent text-gray-400 hover:bg-[#1A1A1A] hover:border-[#333] hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Messages
                </NavLink>
                {profile?.role === 'tailor' && (
                  <NavLink to="/tailor-dashboard" className="border-transparent text-gray-400 hover:bg-[#1A1A1A] hover:border-[#333] hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    Dashboard
                  </NavLink>
                )}
              </>
            )}
            {!user && (
              <NavLink to="/tailor-signup" className="border-transparent text-gray-400 hover:bg-[#1A1A1A] hover:border-[#333] hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Become a Tailor
              </NavLink>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-[#2A2A2A]">
            {user ? (
              <div className="flex items-center px-4 gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-amber-500 font-bold font-serif">
                    {user.displayName?.charAt(0) || <User className="w-5 h-5" />}
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium text-gray-300 uppercase tracking-tighter">{profile?.displayName || user.displayName}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
                <button onClick={logOut} className="ml-auto flex-shrink-0 p-1 text-gray-400 hover:text-white">
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="px-4">
                <button
                  onClick={signIn}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded text-[11px] font-bold text-black uppercase tracking-widest bg-amber-600 hover:bg-amber-500 transition-colors"
                >
                  Sign in
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
