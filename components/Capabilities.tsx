import React from 'react';
import { Database, ShoppingBag, Server, ShieldCheck, Box, Workflow } from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
        <p className="text-slate-400 max-w-xl">
          Beyond standard development. I engineer solutions that handle complex logic, 
          large datasets, and high-traffic commerce.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Card 1 - ACF Pro (Large) */}
        <div className="md:col-span-2 row-span-1 bg-surface border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[60px] translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-all"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="p-3 bg-slate-950 w-fit rounded-lg border border-slate-800 mb-4">
                    <Database className="text-primary w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Advanced ACF Pro</h3>
                    <p className="text-slate-400">Creating complex relationships, repeater logic, and custom data modeling strategies that empower content editors without breaking the layout.</p>
                </div>
            </div>
        </div>

        {/* Card 2 - WooCommerce */}
        <div className="md:col-span-1 bg-slate-950 border border-slate-800 p-8 rounded-2xl group hover:border-accent/50 transition-colors flex flex-col justify-between">
            <div className="p-3 bg-slate-900 w-fit rounded-lg border border-slate-800 mb-4">
                <ShoppingBag className="text-accent w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">Custom Woo</h3>
                <p className="text-slate-400 text-sm">Bespoke e-commerce flows, checkout customization, and high-performance archives.</p>
            </div>
        </div>

        {/* Card 3 - PHP Integration */}
        <div className="md:col-span-1 bg-slate-950 border border-slate-800 p-8 rounded-2xl group hover:border-green-500/50 transition-colors flex flex-col justify-between">
            <div className="p-3 bg-slate-900 w-fit rounded-lg border border-slate-800 mb-4">
                <Server className="text-green-500 w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">API & PHP</h3>
                <p className="text-slate-400 text-sm">Connecting external data sources and building custom data-driven layouts via Bricks.</p>
            </div>
        </div>

        {/* Card 4 - Security (Large) */}
        <div className="md:col-span-2 bg-surface border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <div className="absolute bottom-0 right-0 p-32 bg-purple-500/5 rounded-full blur-[60px] translate-x-10 translate-y-10 group-hover:bg-purple-500/10 transition-all"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex gap-4">
                    <div className="p-3 bg-slate-950 w-fit rounded-lg border border-slate-800 mb-4">
                        <ShieldCheck className="text-purple-500 w-6 h-6" />
                    </div>
                     <div className="p-3 bg-slate-950 w-fit rounded-lg border border-slate-800 mb-4">
                        <Box className="text-yellow-500 w-6 h-6" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Security, Maintenance & Bricksforge</h3>
                    <p className="text-slate-400">Professional updates, plugin audits, and extending Bricks functionality using Bricksforge for GSAP animations and advanced events.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;