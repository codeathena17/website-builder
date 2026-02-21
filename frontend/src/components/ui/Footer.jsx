import React from 'react';
import { Hammer, Github, Twitter, Linkedin, ArrowUpRight, Mail, Globe, Cpu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

   const footerLinks = {};

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top: Newsletter & Brand Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-slate-800 p-2 rounded-xl shadow-lg shadow-slate-900/30">
                <Hammer className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                Buildora<span className="text-blue-400">.</span>
              </span>
            </div>
            
            <p className="text-lg text-gray-300 font-medium max-w-sm leading-relaxed">
              Transforming visual intent into production-grade infrastructure. Built for the modern engineer.
            </p>

            <div className="flex gap-3">
              {[<Github />, <Twitter />, <Linkedin />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  {React.cloneElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-800 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-2">
                  <h3 className="text-white text-xl font-bold">Stay in the loop</h3>
                  <p className="text-slate-400 text-sm font-medium">Get the latest on Engine v3.0 updates.</p>
                </div>
                
                <div className="flex w-full md:w-auto bg-white/5 p-1.5 rounded-2xl border border-white/10 focus-within:border-blue-500 transition-colors">
                  <input 
                    type="email" 
                    placeholder="engineer@company.com" 
                    className="bg-transparent border-none outline-none px-4 text-white text-sm w-full md:w-48 placeholder:text-slate-600"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Links Grid */}
        {Object.keys(footerLinks).length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 lg:gap-8 pb-20 border-b border-slate-700">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-bold flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ) : (
                      <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-bold flex items-center group">
                        {link.name}
                        <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        )}  

        {/* Bottom Bar: Operational Status & Legal */}
        <div className="pt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <span>© {currentYear} Buildora Inc</span>
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;