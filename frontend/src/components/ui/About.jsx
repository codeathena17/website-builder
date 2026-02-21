import React from 'react';
import { Target, Code2, Cpu, Rocket, BarChart3, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  const steps = [
    { icon: <Code2 size={20} />, title: "Develop", desc: "Local-first workflow with instant hot-reloading." },
    { icon: <Cpu size={20} />, title: "Compile", desc: "Automated builds with zero-config optimization." },
    { icon: <Rocket size={20} />, title: "Deploy", desc: "Global edge delivery in under 300ms." },
    { icon: <BarChart3 size={20} />, title: "Scale", desc: "Auto-scaling that breathes with your traffic." }
  ];

  return (
    <section id="about" className="py-20 lg:py-18 bg-slate-900 relative overflow-hidden">
      {/* Subtler Background Element - Responsive Safe */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-950/30 skew-x-12 translate-x-32 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: The Visual Identity (Col 1-5) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Brand Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl relative z-20 overflow-hidden animate-fadeInUp">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
                
                <div className="flex gap-1.5 mb-10">
                  <div className="w-2 h-2 rounded-full bg-red-400 opacity-80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-80" />
                  <div className="w-2 h-2 rounded-full bg-green-400 opacity-80" />
                </div>

                <h4 className="text-xl font-mono mb-6 text-slate-300 flex items-center gap-2">
                  <span className="opacity-50 text-gray-400">01 //</span> Our_Origin
                </h4>
                
                <p className="text-gray-300 text-lg font-medium leading-relaxed mb-8">
                  We stripped away the complexity of traditional cloud providers to give you a platform that <span className="text-white">feels like magic.</span>
                </p>

                <div className="pt-8 border-t border-gray-700 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Global Goal</div>
                    <div className="text-white font-bold">100M Deployments</div>
                  </div>
                </div>
              </div>

              {/* Responsive Uptime Badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-10 z-30 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                <div className="text-2xl font-black italic">99.9%</div>
                <div className="text-[9px] leading-tight font-black uppercase tracking-tighter opacity-80">
                  Reliability<br/>Standard
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Grid (Col 6-12) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center gap-2 text-blue-300 font-black uppercase tracking-[0.2em] text-[10px] bg-blue-950 px-3 py-1 rounded-lg border border-blue-800 animate-fadeIn" style={{animationDelay: '0.1s'}}>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                The Protocol
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                Engineered for <br />
                <span className="text-blue-400 italic">the ambitious.</span>
              </h3>
              
              <p className="text-lg text-gray-300 max-w-xl font-medium leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                Buildora isn't just a hosting provider. We're an obsession with performance, security, and the developer experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="group p-6 bg-slate-800 rounded-[2rem] border border-slate-700 hover:border-blue-600 hover:bg-slate-700 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${0.5 + idx * 0.1}s`, animationFillMode: 'both'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400 text-sm font-black opacity-70 animate-countUp">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="h-px flex-1 border-t border-dashed border-gray-600 animate-lineReveal" style={{animationDelay: `${0.6 + idx * 0.1}s`}} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-700 shadow-sm flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4">
                    {step.icon}
                  </div>
                  <h5 className="font-black text-white text-sm uppercase tracking-tight mb-2 flex items-center gap-2">
                    {step.title} 
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-400" />
                  </h5>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;