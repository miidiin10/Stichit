import React from 'react';
import { NavLink } from 'react-router';
import { ArrowRight, Scissors, Star, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 border-b border-[#2A2A2A] bg-[url('https://images.unsplash.com/photo-1593030761757-71fae4630b05?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center relative z-10">
          <h1 className="text-balance text-4xl font-serif italic font-bold tracking-widest text-[#E0E0E0] sm:text-6xl">
            Custom-fitted clothing, crafted just for you
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans font-light">
            Connect with skilled tailors in your area. Browse portfolios, discuss your vision, schedule fittings, and get perfectly fitted clothes made to your exact measurements.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/tailors"
              className="rounded bg-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black shadow-sm hover:bg-amber-500 transition-colors inline-flex items-center gap-2"
            >
              Find a Tailor <ArrowRight className="h-4 w-4" />
            </NavLink>
            <a href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-white hover:text-amber-500 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="how-it-works" className="bg-[#141414] py-24 sm:py-32 border-b border-[#2A2A2A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600">Perfectly Tailored</h2>
            <p className="mt-2 text-3xl font-serif italic text-white sm:text-4xl">
              Everything you need for custom clothing
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-serif italic text-white flex items-center">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded border border-[#333] bg-[#0A0A0A]">
                    <Scissors className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  </div>
                  Expert Tailors
                </dt>
                <dd className="mt-2 text-sm leading-7 text-gray-500">Browse verified portfolios, check services offered, and find the perfect match for your style.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-serif italic text-white flex items-center">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded border border-[#333] bg-[#0A0A0A]">
                    <MessageSquare className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  </div>
                  Direct Messaging
                </dt>
                <dd className="mt-2 text-sm leading-7 text-gray-500">Communicate directly with your tailor about fabrics, styles, measurements, and timelines.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-serif italic text-white flex items-center">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded border border-[#333] bg-[#0A0A0A]">
                    <Star className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  </div>
                  Reviews & Ratings
                </dt>
                <dd className="mt-2 text-sm leading-7 text-gray-500">Read what others have to say or leave your own review after a successful order.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* FAQ Placeholder */}
      <div className="bg-[#0A0A0A] py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-serif italic text-white text-center mb-10 tracking-widest">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto divide-y divide-[#2A2A2A]">
              <div className="py-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-300">How do measurements work?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">You can either schedule an in-person measurement fitting, or follow a designated video guide from your tailor and send them via direct message.</p>
              </div>
              <div className="py-6">
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-300">Is payment secure?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">Yes, payments are held securely until the final fitting and delivery are completed to your satisfaction.</p>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
