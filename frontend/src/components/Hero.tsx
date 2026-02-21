import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroComponent: React.FC = () => {
  return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 opacity-80" style={{ backgroundImage: 'url(hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' , backgroundAttachment: 'fixed' }}>

  

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-700/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-[fadeInUp_0.8s_ease-out]">
          
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          Fast. Reliable <br />
          Drain & Sewer Cleaning
        </h1>

        <p className="text-lg md:text-xl text-black-400 mb-10 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
         Professional drain and sewer cleaning services to eliminate clogs, prevent backups, 
  and keep your plumbing flowing smoothly. Available when you need us most.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <a href="#contact" className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative flex items-center gap-2">
              Book Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <button 
            onClick={() => {
              const element = document.querySelector('#services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 glass-card rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group"
          >
            Explore our services
          </button>
        </div>

        
        </div>
    
    </section>
  );
};

export default React.memo(HeroComponent);