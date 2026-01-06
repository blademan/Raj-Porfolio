import React from 'react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const LearningPath: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1: Environment",
      title: "The Foundation",
      items: ["WordPress Clean Install", "Bricks + Child Theme", "ACF Pro Setup", "Bricksforge Integration"],
      status: "complete"
    },
    {
      phase: "Phase 2: Structure",
      title: "Data Modeling",
      items: ["Hero Section Implementation", "Custom Post Types (Projects)", "Repeater Fields Logic", "Dynamic Query Loops"],
      status: "current"
    },
    {
      phase: "Phase 3: Advanced",
      title: "Mastery Path",
      items: ["API Query Builder (PHP Skills)", "Bricksforge Panel & GSAP", "Style Manager (Tokens)", "Custom Woo Builder"],
      status: "pending"
    }
  ];

  return (
    <section id="roadmap" className="max-w-4xl mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Architecture Roadmap</h2>
        <p className="text-slate-400">The journey from Setup to Backend Lead.</p>
      </div>

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-background ${
              step.status === 'complete' ? 'bg-primary' : 
              step.status === 'current' ? 'bg-accent animate-pulse' : 'bg-slate-700'
            }`}></div>

            <div className="flex flex-col gap-1 mb-2">
              <span className={`text-xs font-bold uppercase tracking-widest ${
                 step.status === 'complete' ? 'text-primary' : 
                 step.status === 'current' ? 'text-accent' : 'text-slate-500'
              }`}>
                {step.phase}
              </span>
              <h3 className="text-2xl font-bold text-slate-100">{step.title}</h3>
            </div>

            <div className="bg-surface border border-slate-800 rounded-xl p-6 mt-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    {step.status === 'complete' ? (
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <CircleDashed className="w-5 h-5 text-slate-600 shrink-0" />
                    )}
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPath;