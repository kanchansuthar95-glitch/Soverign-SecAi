import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Star, ShieldCheck } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { pageTransition, containerTransition, itemTransition } from '../animations/transitions';

const Skills: React.FC = () => {
  const skills = [
    { id: 'recon', name: 'Network Reconnaissance', level: 95, icon: Zap, color: 'text-cyan-400' },
    { id: 'vuln', name: 'Vulnerability Analysis', level: 88, icon: ShieldCheck, color: 'text-purple-400' },
    { id: 'exploit', name: 'Exploit Development', level: 72, icon: Cpu, color: 'text-red-400' },
    { id: 'report', name: 'Automated Reporting', level: 90, icon: Star, color: 'text-amber-400' },
  ];

  return (
    <motion.div 
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <header>
        <h2 className="text-3xl font-bold gx-accent-text uppercase tracking-widest">Skill Library</h2>
        <p className="text-xs opacity-50 uppercase tracking-[0.3em]">Neural Evolution Progress: 84%</p>
      </header>

      <motion.div 
        variants={containerTransition}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((skill) => (
          <motion.div key={skill.id} variants={itemTransition}>
            <Card className="group hover:border-[#66fcf1]/40 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={cn("p-3 rounded-lg bg-white/5", skill.color)}>
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider">{skill.name}</h3>
                    <p className="text-[10px] opacity-50 uppercase">Autonomous Capability</p>
                  </div>
                </div>
                <span className={cn("text-xl font-bold font-mono", skill.color)}>{skill.level}%</span>
              </div>
              
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={cn("h-full", skill.id === 'recon' ? 'bg-cyan-400' : skill.id === 'vuln' ? 'bg-purple-400' : skill.id === 'exploit' ? 'bg-red-400' : 'bg-amber-400')}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
