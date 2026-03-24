import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Console from '../components/Console';
import AgentSelector, { Agent, agents } from '../components/AgentSelector';
import Skills from './Skills';
import { Send, Terminal as TerminalIcon, Shield, Activity, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([
    { agent: 'System', message: 'Sovereign SecAI OS initialized.', timestamp: new Date().toLocaleTimeString() },
    { agent: 'MasterControl', message: 'Welcome back, Operator. All systems operational.', timestamp: new Date().toLocaleTimeString() }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newLog = { 
      agent: 'User', 
      message: input, 
      timestamp: new Date().toLocaleTimeString() 
    };
    setLogs(prev => [...prev, newLog]);
    
    setTimeout(() => {
      setLogs(prev => [...prev, {
        agent: selectedAgent.name,
        message: `Processing command: "${input}". Analyzing authorized scope...`,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);
    
    setInput('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 opacity-70">Resonator Selection</h3>
              <AgentSelector selectedAgent={selectedAgent} onSelect={setSelectedAgent} />
            </section>

            <section className="flex-1 flex flex-col space-y-4 min-h-[400px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.4em] opacity-70">
                  <TerminalIcon size={14} />
                  <span>Live Intelligence Stream</span>
                </div>
                <div className="flex items-center space-x-4">
                   <button className="text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Clear Logs</button>
                   <button className="text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Export Session</button>
                </div>
              </div>
              <Console logs={logs} />
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#66fcf1]/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={`Command ${selectedAgent.name}...`}
                    className="w-full bg-[#1f2833] border border-[#66fcf1]/20 rounded-lg px-6 py-4 text-[#c5c6c7] focus:outline-none focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1]/30 transition-all duration-300 pr-16"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66fcf1] hover:text-white transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      case 'skills':
        return <Skills />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center gx-panel min-h-[400px]">
            <div className="text-center space-y-4">
              <Shield size={48} className="mx-auto text-[#66fcf1] opacity-20" />
              <p className="text-xs uppercase tracking-widest opacity-50">Module "{activeTab}" is currently in standby mode.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="gx-button text-xs"
              >
                Return to Console
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0b0c10]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col p-8 space-y-8 overflow-y-auto">
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div>
              <h2 className="text-3xl font-bold gx-accent-text uppercase tracking-widest">
                {activeTab === 'dashboard' ? 'Command Center' : activeTab.toUpperCase()}
              </h2>
              <p className="text-xs opacity-50 uppercase tracking-[0.3em]">Operational Status: Nominal</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="gx-panel px-4 py-2 flex items-center space-x-3 group cursor-help">
              <Activity size={14} className="text-[#66fcf1] group-hover:animate-spin" />
              <span className="text-[10px] uppercase font-bold tracking-widest">CPU: 12%</span>
            </div>
            <div className="gx-panel px-4 py-2 flex items-center space-x-3 group cursor-help">
              <Shield size={14} className="text-[#66fcf1]" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Scope: Verified</span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
