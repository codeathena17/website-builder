import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Terminal } from 'lucide-react';

const CTA = () => {
  const [copied, setCopied] = useState(false);
  const command = "npx buildora@latest init";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-6 bg-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Unified Background Container with All Content */}
        <div className="bg-gray-300 rounded-3xl px-6 py-16 md:px-12 md:py-20">
          {/* Main Content */}
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Ready to <span className="text-blue-600">build?</span>
            </h2>
            
            <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">
              Zero configuration. No credit card. Just clean code delivered to your local environment instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                Create Your Account
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                Talk to Sales
              </button>
            </div>

            
          
            </div>
          </div>

          
            
            </div>
      
    </section>
  );
};

export default CTA;