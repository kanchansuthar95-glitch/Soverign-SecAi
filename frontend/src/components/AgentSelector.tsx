import React from 'react';
import { cn } from '../lib/utils';
import { Shield, Code, Search, Briefcase } from 'lucide-react';

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: any;
}

export const agents: Agent[] = [
  { id: 'secai', name: 'SecAI', role: 'Security Specialist', description: 'Expert in penetration testing and vulnerability analysis.', icon: Shield },
  { id: 'devai', name: 'DevAI', role: 'Full-Stack Developer', description: 'Specializes in secure code development and architecture.', icon: Code },
  { id: 'researcher', name: 'Researcher', role: 'Threat Intelligence', description: 'Analyzes emerging threats and CVE datasets.', icon: Search },
  { id: 'freelancer', name: 'Freelancer', role: 'Bounty Hunter', description: 'Optimized for bug bounty workflows and rapid recon.', icon: Briefcase },
];

interface AgentSelectorProps {
  selectedAgent: Agent;
  onSelect: (agent: Agent) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ selectedAgent, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {agents.map((agent) => (
        <button
          key={agent.id}
          onClick={() => onSelect(agent)}
          className={cn(
            "p-4 rounded-lg border text-left transition-all duration-500 group relative overflow-hidden",
            selectedAgent.id === agent.id 
              ? "bg-[#66fcf1]/10 border-[#66fcf1] shadow-[0_0_20px_rgba(102,252,241,0.1)]" 
              : "bg-[#1f2833] border-[#66fcf1]/10 hover:border-[#66fcf1]/40"
          )}
        >
          <div className="flex items-center space-x-4 mb-2">
            <div className={cn(
              "p-2 rounded-md transition-colors",
              selectedAgent.id === agent.id ? "bg-[#66fcf1] text-[#0b0c10]" : "bg-white/5 text-[#66fcf1]"
            )}>
              <agent.icon size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest">{agent.name}</h4>
              <p className="text-[10px] opacity-50 uppercase">{agent.role}</p>
            </div>
          </div>
          <p className="text-[10px] opacity-70 leading-relaxed">{agent.description}</p>
          
          {selectedAgent.id === agent.id && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66fcf1] animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default AgentSelector;
