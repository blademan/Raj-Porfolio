import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 py-12 mt-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-slate-200">Raj<span className="text-primary">.Dev</span></p>
          <p className="text-slate-500 text-sm mt-1">Senior WordPress Architect</p>
        </div>
        
        <div className="text-slate-600 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-1 flex items-center gap-1 justify-center md:justify-end">
            Built with <span className="text-accent">React</span> (Simulating Bricks Workflow)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;