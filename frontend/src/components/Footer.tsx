import React from 'react';
import { Rocket, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1.5 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Nova<span className="text-yellow-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital reality. We build the future of the web.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">contact</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">AI Integration</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Nova Digital. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterComponent);