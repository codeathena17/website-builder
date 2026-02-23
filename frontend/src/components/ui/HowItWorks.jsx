import React from 'react';
import { 
  MousePointer2, 
  Type, 
  ChevronRight, 
  PlusCircle
} from 'lucide-react';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import onclick from '../../assets/onclick.png'

const HowItWorks = () => {
  const steps = [
    {
      title: "Pick Components",
      desc: "Browse our library of 100+ sections. Drag high-converting Heros, Features, and Footers onto your page.",
      image: logo4,
      label: "Component Library"
    },
    {
      title: "Real-time Editing",
      desc: "Click-to-edit any text or image. Swap themes, adjust spacing, and refine content with zero lag.",
      image: logo2,
      label: "Visual Editor"
    },
    {
      title: "Design & Brand",
      desc: "Change global colors, fonts, and background images to match your brand identity perfectly.",
      image: logo3,
      label: "Style Manager"
    },
    {
      title: "Deploy & Export",
      desc: "Publish to our lightning-fast hosting or download the production-ready React source code.",
      image: onclick,
      label: "One-Click Launch"
    }
  ];

  return (
    <section className="py-18 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            Easy as pie
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            How <span className="text-blue-600">Buildora</span> Works.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop wrestling with code. Use our visual canvas to assemble, customize, and launch professional websites in record time.
          </p>
          {/* Small logos row to showcase component providers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8"/>
           
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-24 items-start">
  {steps.map((step, idx) => (
    <div key={idx} className={`group relative ${idx % 2 !== 0 ? 'lg:mt-12' : ''}`}>
      {/* Decorative Path Line */}
      {idx !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px border-t-2 border-dashed border-slate-200 z-0" />
      
        
      )}

      <div className="relative z-10 h-full bg-white p-2 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-3">
        <div className="bg-slate-50 border border-slate-100 rounded-[2.2rem] p-8 h-full flex flex-col">
          
          <div className="flex justify-between items-start mb-8">
            <div className="relative">
              {/* FIXED ICON CONTAINER: We use group-hover to target the icon stroke specifically */}
              <div className="w-20 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-slate-100 
                            group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 overflow-hidden p-2">
                {step.image ? (
                  <img src={step.image} alt={step.title} className="w-10 h-10 object-contain relative z-10" />
                ) : (
                  React.cloneElement(step.icon, { 
                    className: "text-blue-600 group-hover:text-white transition-colors duration-500 relative z-10" 
                  })
                )}
                {/* Caption under the icon */}
                <div className="mt-2 text-xs text-slate-500 group-hover:text-white transition-colors text-center px-1">
                  {step.label} 
                </div>
              </div>
              
              {/* Floating Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 text-white text-[10px] font-black rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20">
                {idx + 1}
              </div>
            </div>
            
            <div className="text-[0.65rem] font-black text-slate-300 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">
              Step_{idx + 1}
            </div>
          </div>

          <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
            {step.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
            {step.desc}
          </p>

          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-50/50">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                {step.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-blue-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  ))}
</div>
        {/* Builder Interface Mockup */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[3rem] blur-2xl opacity-50"></div>
          
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Mockup Toolbar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-32 bg-white border border-slate-200 rounded-lg hidden md:block"></div>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-blue-600/20">
                  Publish Site
                </button>
              </div>
            </div>

            {/* Mockup Content Area */}
            <div className="flex h-[400px]">
              {/* Left Sidebar */}
              <div className="w-64 border-r border-slate-200 p-6 hidden lg:block bg-white">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-6">
                  <PlusCircle size={14} className="text-blue-600" /> Components
                </div>
                <div className="space-y-3">
                  {[
                    { logo: logo1, name: "Hero Component" },
                    { logo: logo2, name: "Feature Block" },
                    { logo: logo3, name: "Pricing Table" },
                    { logo: logo4, name: "Footer Layout" }
                  ].map((item, i) => (
                    <div key={i} className="h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center px-3 gap-3 cursor-grab hover:border-blue-400 transition-colors group/item">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs font-medium text-slate-600 truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="flex-1 bg-slate-50 p-12 flex items-center justify-center relative">
                <div className="w-full max-w-lg h-full border-2 border-dashed border-blue-200 rounded-3xl bg-white shadow-inner flex items-center justify-center relative group/canvas transition-all overflow-hidden">
                  {/* Example component preview image with centered overlay text */}
                  <img src={logo4} alt="component preview" className="absolute inset-0 w-full h-full object-cover opacity-95" />
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>

                  <div className="relative z-10 flex flex-col items-center gap-2 text-center px-6">
                    <div className="p-3 bg-blue-50 rounded-2xl mb-2">
                      <MousePointer2 className="text-blue-600 animate-bounce" size={28} />
                    </div>
                    <h4 className="text-white text-lg font-extrabold">Drop your Hero component here</h4>
                    <p className="text-slate-200 text-xs">Pick a template from the left sidebar</p>
                  </div>
                </div>
                
                {/* Floating "Edit" Tag with logo4 */}
                <div className="absolute top-20 right-20 bg-white shadow-xl border border-slate-100 p-4 rounded-2xl hidden md:block animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={logo4} alt="logo4" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <div className="h-2 w-12 bg-slate-200 rounded-full mb-1"></div>
                      <div className="h-2 w-8 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 mx-auto shadow-xl hover:shadow-blue-500/20 active:scale-95">
            Start Building for Free <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
