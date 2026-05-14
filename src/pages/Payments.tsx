import React from 'react';
import { CreditCard, Download, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Payments() {
  const { user, profile } = useAuth();
  
  const transactions = [
    { id: 'TRX-12903', date: '2026-10-23', description: 'Advance: Bespoke Suit - Sarah M.', amount: 325.00, type: 'in', status: 'completed' },
    { id: 'TRX-12894', date: '2026-10-20', description: 'Platform Fee: October', amount: 45.00, type: 'out', status: 'completed' },
    { id: 'TRX-12871', date: '2026-10-18', description: 'Completion: Evening Gown - Emma W.', amount: 280.00, type: 'in', status: 'completed' },
    { id: 'TRX-12865', date: '2026-10-15', description: 'Withdrawal to Bank ****4091', amount: 600.00, type: 'out', status: 'completed' }
  ];

  const clientTransactions = [
     { id: 'TRX-12933', date: '2026-10-23', description: 'Payment: First Installment - Bespoke Suit', amount: 325.00, type: 'out', status: 'completed' },
     { id: 'TRX-12812', date: '2026-09-12', description: 'Payment: Full - Custom Dress', amount: 450.00, type: 'out', status: 'completed' },
  ];

  const displayTx = profile?.role === 'tailor' ? transactions : clientTransactions;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white mb-2 flex items-center gap-3">
             <CreditCard className="w-8 h-8 text-amber-500" /> Payments & Wallet
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Manage your transactions seamlessly.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-black font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-amber-500 transition-colors">
          <Download className="w-4 h-4" /> Download Statement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 shadow-xl relative overflow-hidden">
           <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
           <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Available Balance</p>
           <h2 className="text-4xl font-serif italic text-white flex items-baseline gap-1"><span className="text-xl">£</span>{profile?.role === 'tailor' ? '1,245.00' : '0.00'}</h2>
           {profile?.role === 'tailor' && (
             <button className="mt-4 px-4 py-2 bg-[#1A1A1A] border border-[#333] text-[10px] uppercase tracking-widest text-white hover:border-amber-500 transition-colors rounded-sm w-full">Withdraw Funds</button>
           )}
        </div>
        
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 shadow-xl flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Total {profile?.role === 'tailor' ? 'Earned' : 'Spent'} (All Time)</p>
            <h3 className="text-2xl font-serif text-white">£{profile?.role === 'tailor' ? '14,890.00' : '775.00'}</h3>
        </div>

        <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 shadow-xl flex flex-col justify-center">
           <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Active Escrow</p>
           <h3 className="text-2xl font-serif text-white flex items-center gap-2">£325.00 <span className="text-[9px] ml-2 font-sans bg-amber-600/20 text-amber-500 px-2 py-0.5 rounded-sm uppercase tracking-widest border border-amber-500/30">Protected</span></h3>
        </div>
      </div>

      <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm overflow-hidden shadow-xl">
        <div className="p-6 border-b border-[#2A2A2A]">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0A0A0A] border-b border-[#2A2A2A]">
              <tr>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Date</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Transaction ID</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Description</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 text-right">Amount</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A2A]">
              {displayTx.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-4 text-xs text-gray-400">{tx.date}</td>
                  <td className="p-4 text-xs font-mono text-gray-500">{tx.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-1 rounded-sm ${tx.type === 'in' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {tx.type === 'in' ? <ArrowDownLeft className="w-4 h-4"/> : <ArrowUpRight className="w-4 h-4"/>}
                      </div>
                      <span className="text-xs text-white">{tx.description}</span>
                    </div>
                  </td>
                  <td className={`p-4 text-sm font-bold text-right ${tx.type === 'in' ? 'text-green-500' : 'text-white'}`}>
                    {tx.type === 'in' ? '+' : '-'}£{tx.amount.toFixed(2)}
                  </td>
                  <td className="p-4 text-right">
                    <span className="inline-flex bg-gray-500/10 border border-gray-500/30 text-gray-400 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
