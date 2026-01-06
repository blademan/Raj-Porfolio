import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', desc: 'WordPress Architecture' },
    { label: 'Monthly Productivity', value: '240h', desc: 'Consistent Output' },
    { label: 'Active Clients', value: '60+', desc: 'Managed & Secured' },
    { label: 'Projects Shipped', value: '100+', desc: 'Custom Themes & Plugins' },
  ];

  return (
    <section className="py-10 border-y border-slate-900 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors font-mono">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-600">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;