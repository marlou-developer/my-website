import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  TrendingUp, 
  DollarSign, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const STATS = [
  { id: 1, label: 'Total Sales', value: '$12,450.00', change: '+12.5%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 2, label: 'Orders', value: '156', change: '+5.2%', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 3, label: 'Customers', value: '1,240', change: '+1.4%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
  { id: 4, label: 'Low Stock Items', value: '12', change: '-2 items', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100' },
];

const RECENT_TRANSACTIONS = [
  { id: 'TX-9021', customer: 'Guest', total: '$45.00', status: 'Completed', time: '2 mins ago' },
  { id: 'TX-9020', customer: 'John Doe', total: '$120.50', status: 'Completed', time: '15 mins ago' },
  { id: 'TX-9019', customer: 'Guest', total: '$12.00', status: 'Refunded', time: '1 hour ago' },
];

export default function DashboardSection() {
  return (
    <div className=" flex">
  

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
     
        <div className="p-8 overflow-y-auto">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {STATS.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                    <stat.icon size={24} />
                  </div>
                  <span className={`flex items-center text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                    {stat.change.startsWith('+') ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sales Chart Placeholder */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp size={18} className="text-blue-600" /> Sales Activity
                </h3>
                <select className="text-xs font-bold text-slate-500 border rounded px-2 py-1 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              {/* Dummy Chart Visualization */}
              <div className="h-64 flex items-end gap-2 px-2">
                {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 hover:bg-blue-600 transition-colors rounded-t-lg relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h * 10}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Recent Transactions List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <ShoppingCart size={18} className="text-blue-600" /> Recent Sales
              </h3>
              <div className="space-y-4">
                {RECENT_TRANSACTIONS.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                        TX
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{tx.customer}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">{tx.id} • {tx.time}</p>
                      </div>
                    </div>
                    <p className="text-sm font-black text-slate-900">{tx.total}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all">
                View All Transactions
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-component for Sidebar Navigation
function NavItem({ icon: Icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
      active 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}>
      <Icon size={20} />
      {label}
    </button>
  );
}