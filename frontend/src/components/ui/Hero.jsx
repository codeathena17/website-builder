import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MousePointer2, Sparkles, 
  Layout, Type, Image as ImageIcon, 
  Square, Layers, Settings, ChevronRight
} from 'lucide-react';

const Hero = () => {
  const [promptText, setPromptText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  const fullPrompt = "Add a high-conversion checkout section...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPromptText(fullPrompt.slice(0, i));
      i++;
      if (i > fullPrompt.length) {
        clearInterval(interval);
        setTimeout(() => setIsEditing(true), 500);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='hero' className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden font-sans pt-20 pb-10">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{ 
            backgroundImage: `url('hero.png')`,
            backgroundSize: 'cover' 
          }} 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-slate-50/20 via-transparent to-blue-50/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
            <Layers size={12} /> Visual Engine v3.0
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Pick. Drop. <br />
            <span className="text-blue-600">Deploy.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            The world’s first <span className="text-slate-900 font-bold">AI Visual Builder</span> that generates production-ready React code as you drag components.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
              Launch Builder 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              View Components
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (SMALLER BUILDER) */}
        <div className="relative group flex justify-center lg:justify-end">
          
          {/* Floating Component Menu */}
          <div className="absolute -left-8 top-20 z-30 hidden xl:block">
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-3 rounded-2xl shadow-xl space-y-3">
              {[Layout, Type, ImageIcon, Square].map((Icon, i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 cursor-grab active:cursor-grabbing transition-all shadow-sm"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Main Builder Window (Reduced Size) */}
          <div className="bg-white border border-slate-200 
            rounded-[2.5rem] 
            shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] 
            overflow-hidden 
            max-w-[620px] w-full scale-95">

            <div className="h-12 border-b border-slate-50 flex items-center justify-between px-6 bg-slate-50/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/40" />
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Project: Fintech_v1
              </div>
              <Settings size={14} className="text-slate-300" />
            </div>

            <div className="p-8 min-h-[400px] relative overflow-hidden">
              
              {/* Preview Section */}
              <div className="absolute top-10 left-10 right-10 p-6 rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/30 flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-blue-200 rounded-full" />
                  <div className="h-2 w-48 bg-blue-100 rounded-full" />
                </div>
              </div>

              {/* Final Component */}
              <div className={`mt-32 transition-all duration-1000 transform ${
                isEditing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="relative p-6 rounded-[2rem] bg-white border-2 border-blue-500 shadow-2xl shadow-blue-100">

                  <div className="absolute -top-12 left-0 flex items-center gap-1 bg-blue-600 text-white p-1 rounded-lg text-[9px] font-black uppercase tracking-tighter">
                    <span className="px-2 border-r border-white/20">
                      Edit: Section
                    </span>
                    <span className="px-2">
                      Padding: 40px
                    </span>
                    <ChevronRight size={10} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-slate-900" />
                      <div className="flex gap-2">
                        <div className="h-4 w-12 bg-slate-100 rounded-full" />
                        <div className="h-4 w-12 bg-slate-100 rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-3 py-4 text-left">
                      <div className="h-8 w-3/4 bg-slate-900 rounded-lg" />
                      <div className="h-3 w-full bg-slate-100 rounded-full" />
                      <div className="h-3 w-2/3 bg-slate-100 rounded-full" />
                    </div>

                    <div className="h-12 w-full bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xs">
                      Complete Transaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className={`absolute z-40 transition-all duration-1000 ${
                isEditing ? 'top-1/2 left-1/2' : 'top-[80%] left-[80%]'
              }`}>
                <MousePointer2 
                  className="text-slate-900 fill-white drop-shadow-lg" 
                  size={32} 
                />
                <div className="ml-4 mt-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded shadow-lg font-bold">
                  Dragging Component...
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
