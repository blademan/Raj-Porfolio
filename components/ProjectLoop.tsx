import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  client: string;
  role: string;
  stack: string[];
  status: 'Live' | 'Maintenance';
}

const projects: Project[] = [
  {
    id: 1,
    client: "FinTech Global Dashboard",
    role: "Lead Backend Developer",
    stack: ["Bricks", "ACF Pro", "Rest API"],
    status: "Live"
  },
  {
    id: 2,
    client: "Luxury Estate Marketplace",
    role: "Architecture & Filtering Logic",
    stack: ["WordPress", "FacetWP", "Custom PHP"],
    status: "Live"
  },
  {
    id: 3,
    client: "SaaS Documentation Hub",
    role: "Full Build",
    stack: ["Bricksforge", "GSAP", "CPT UI"],
    status: "Maintenance"
  }
];

const ProjectLoop: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
            <div>
                <p className="font-mono text-primary text-sm mb-2">{'<QueryLoop type="projects">'}</p>
                <h2 className="text-3xl font-bold">Recent Deployments</h2>
            </div>
        </div>

        <div className="flex flex-col gap-px bg-slate-800 border border-slate-800 rounded-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-surface text-xs font-mono text-slate-500 uppercase tracking-wider hidden md:grid">
            <div className="col-span-5">Project / Client</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-3">Tech Stack</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          {/* Loop Items */}
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 bg-background hover:bg-slate-900 transition-colors items-center group">
              
              <div className="col-span-1 md:col-span-5">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">{project.client}</h3>
                <span className="inline-block md:hidden text-xs text-slate-500 mt-1">{project.status}</span>
              </div>

              <div className="col-span-1 md:col-span-3">
                <p className="text-sm text-slate-400">{project.role}</p>
              </div>

              <div className="col-span-1 md:col-span-3 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="col-span-1 md:col-span-1 flex md:justify-end">
                 <button className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                 </button>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-4 text-right">
            <p className="font-mono text-slate-600 text-sm">{'</QueryLoop>'}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectLoop;