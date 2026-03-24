import React from 'react';
import { LayoutDashboard, Shield, Cpu, Terminal, Settings, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Console' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'recon', icon: Terminal, label: 'Recon' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-[#1f2833] border-r border-[#66fcf1]/10 flex flex-col">
      <div className="p-8">
        <h1 className="text-xl font-bold gx-accent-text tracking-[0.2em] uppercase">Sovereign</h1>
        <p className="text-[10px] opacity-50 uppercase tracking-widest mt-1">SecAI OS v1.0</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 group",
              activeTab === item.id 
                ? "bg-[#66fcf1]/10 text-[#66fcf1] border border-[#66fcf1]/20" 
                : "text-[#c5c6c7] hover:bg-white/5"
            )}
          >
            <item.icon size={18} className={cn(activeTab === item.id ? "text-[#66fcf1]" : "opacity-50 group-hover:opacity-100")} />
            <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-8 border-t border-[#66fcf1]/10">
        <button className="flex items-center space-x-4 text-red-500/50 hover:text-red-500 transition-colors">
          <LogOut size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Shutdown</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
