import React from 'react';
import { 
  Sparkles, 
  Code, 
  Globe, 
  Zap, 
  Layers, 
  Command,
  LayoutTemplate
} from 'lucide-react';
import download11Img from '../../assets/download11_img.png'; 
import download12Img from '../../assets/download12_img.png';

const Features = () => {
  return (
    <section className="py-18 bg-slate-200 relative overflow-hidden" id="features">
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header: Centered & Minimal */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Command size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">The Modern Standard</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Visual drafting. <br />
            <span className="text-blue-600 italic font-serif">Engineered</span> output.
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Buildora bridges the gap between creative freedom and production-grade code.
          </p>
        </div>

        {/* The Atelier Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          
          {/* Main Feature: AI Canvas */}
          <div className="md:col-span-6 lg:col-span-8 group relative bg-white border border-slate-200 rounded-[2.5rem] p-10 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
            <div className="relative z-20 max-w-md">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                <Sparkles size={22} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Drag and Drop</h3>
              <p className="text-slate-500 mb-8">Move, copy or rearrange items by clicking holding and moving them to place where you want too.</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">Dragstart and Dragover</span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">Drop</span>
              </div>
            </div>

            {/* Visual: Floating UI Elements */}
            <div className="absolute top-10 -right-10 w-1/2 h-full hidden lg:block">
              <div className="relative w-full h-full">
                <div className="absolute top-0 right-0 bg-white border border-slate-200 shadow-2xl rounded-xl p-4 w-64 transform -rotate-6 group-hover:-translate-y-4 transition-transform duration-700">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-blue-50/50 rounded-lg border border-dashed border-blue-200" />
                    <div className="h-4 w-full bg-slate-50 rounded" />
                  </div>
                </div>
                <div className="absolute bottom-20 right-20 bg-slate-900 text-white rounded-xl p-4 w-56 shadow-2xl transform rotate-12 group-hover:translate-x-4 transition-transform duration-700 delay-75">
                  <div className="flex justify-between items-center mb-2 text-[10px] opacity-50 font-mono">
                    <span>layers.tsx</span>
                    <Layers size={10} />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-blue-500/50 rounded" />
                    <div className="h-1 w-3/4 bg-blue-500/30 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature: Export */}
          <div className="md:col-span-3 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
              <Code size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Clean Export</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Production-ready, Professional, accurate and Easy to achieve. No bloat, No code and complexity.</p>
            </div>
          </div>

          {/* Feature: Global Edge */}
          <div className="md:col-span-3 lg:col-span-4 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-blue-800/20 transition-all duration-500 relative h-80 md:h-96 flex items-center justify-center">
            <img src={download11Img} className='absolute inset-0 w-full h-full object-cover opacity-30' alt="Global Edge" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
            <div className="relative z-10 text-center px-8">
              <div className="w-12 h-12 bg-black/20 rounded-2xl flex items-center justify-center text-black mb-4 border border-white/30 backdrop-blur-sm mx-auto">
                <Globe size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Global Edge</h3>
              <p className="text-black/90 text-sm leading-relaxed">One-click deployment to 200+ regions with sub-second latency.</p>
            </div>
          </div>

          {/* Image Overlay Feature */}
          <div className="md:col-span-3 lg:col-span-4 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 relative h-80 md:h-96 flex items-center justify-center">
            <img src={download12Img} className='absolute inset-0 w-full h-full object-cover opacity-30' alt="Visual Preview" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center px-8">
              <div className="w-12 h-12 bg-black/20 rounded-2xl flex items-center justify-center text-black mb-4 border border-white/30 backdrop-blur-sm mx-auto">
                <Layers size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Visual Preview</h3>
              <p className="text-black/90 text-sm leading-relaxed">See your designs come to life with real-time interactive preview and instant feedback.</p>
            </div>
          </div>

          {/* Feature: Components */}
          <div className="md:col-span-6 lg:col-span-8 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 group overflow-hidden">
            <div className="flex-1">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <LayoutTemplate size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">More Components</h3>
              <p className="text-slate-500 text-sm mb-6">Access a library of 500+ pre-built, accessible primitives.</p>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600">
                Browse Library <Zap size={14} fill="currentColor" />
              </button>
            </div>
            
            {/* Visual: Mini-Gallery Mockup */}
            <div className="flex-1 grid grid-cols-2 gap-3 w-full opacity-60 group-hover:opacity-100 transition-opacity">
               <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100" />
               </div>
               <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 p-3 flex flex-col justify-center gap-2">
                  <div className="h-2 w-full bg-slate-200 rounded-full" />
                  <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
               </div>
               <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
               <div className="h-20 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold uppercase tracking-tighter">
                  CTA
               </div>
            </div>
          </div>

        </div>

     </div>
    </section>
  );
};

export default Features;