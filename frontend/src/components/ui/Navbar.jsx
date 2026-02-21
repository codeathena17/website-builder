import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth scroll to section
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll effect for glassmorphism and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['hero', 'about', 'features', 'pricing'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg ${
              scrolled
                ? 'bg-blue-600 shadow-blue-200'
                : 'bg-white shadow-blue-100/20'
            }`}>
              <Hammer className={`w-6 h-6 ${
                scrolled ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${
              scrolled ? 'text-slate-900' : 'text-slate-900'
            }`}>
              Build<span className={scrolled ? 'text-blue-600' : 'text-blue-600'}>ora</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`font-medium transition-colors relative group ${
                  activeSection === link.href.slice(1) 
                    ? 'text-blue-600' 
                    : scrolled
                      ? 'text-slate-600 hover:text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            
            <button 
              onClick={() => navigate('/login')}
              className={`px-7 py-2.5 rounded-full font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2 ${
                scrolled
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
              }`}
            >
              Login <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden ${
            scrolled ? 'text-slate-900' : 'text-slate-900'
          }`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-slate-900 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
        isOpen ? 'top-full opacity-100' : 'top-[-400px] opacity-0 pointer-events-none'
      } ${
        scrolled ? 'bg-white border-b border-slate-100 shadow-xl' : 'bg-white/95 backdrop-blur-md border-b border-white/20 shadow-xl'
      }`}>
        <div className="px-4 pt-2 pb-8 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`block px-4 py-4 text-base font-semibold rounded-xl transition-all ${
                activeSection === link.href.slice(1)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button 
              onClick={() => navigate('/login')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20"
            >
              Login to Buildora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;