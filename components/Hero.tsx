import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.net/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-primary mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Online: v2.2.4
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Senior WordPress <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">Architect.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building robust, scalable systems for high-end agencies for over 8 years. 
          <span className="text-slate-200 font-semibold block mt-2">I build the engine; you drive the design.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-primary text-slate-950 rounded-lg font-bold hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group">
            Request Private Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg font-medium hover:border-slate-600 hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4" />
            Explore Stack
          </button>
        </div>

        {/* Code Snippet Decoration */}
        <div className="mt-16 mx-auto max-w-3xl bg-slate-950 rounded-xl border border-slate-800/60 shadow-2xl p-4 text-left font-mono text-sm hidden md:block opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500">{'// Initializing expert environment...'}</p>
            <p className="text-purple-400">const <span className="text-blue-400">raj</span> = <span className="text-yellow-400">new</span> <span className="text-emerald-400">Architect</span>({'{'} </p>
            <p className="pl-4 text-slate-300">stack: [<span className="text-orange-400">'Bricks'</span>, <span className="text-orange-400">'ACF Pro'</span>, <span className="text-orange-400">'WooCommerce'</span>],</p>
            <p className="pl-4 text-slate-300">experience: <span className="text-blue-400">8</span>, <span className="text-slate-500"> // years</span></p>
            <p className="pl-4 text-slate-300">efficiency: <span className="text-orange-400">'240h/month'</span></p>
            <p className="text-slate-300">{'}'});</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;