import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Log {
  agent: string;
  message: string;
  timestamp: string;
}

interface ConsoleProps {
  logs: Log[];
}

const Console: React.FC<ConsoleProps> = ({ logs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 bg-[#0b0c10]/80 border border-[#66fcf1]/10 rounded-lg p-6 font-mono text-xs overflow-y-auto space-y-3 custom-scrollbar"
    >
      {logs.map((log, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex space-x-4 group"
        >
          <span className="opacity-30 select-none">[{log.timestamp}]</span>
          <span className={log.agent === 'User' ? 'text-purple-400' : 'text-[#66fcf1]'}>
            {log.agent.toUpperCase()}
          </span>
          <span className="text-[#c5c6c7] opacity-80 group-hover:opacity-100 transition-opacity">
            {log.message}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Console;
