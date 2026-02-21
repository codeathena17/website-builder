import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const features = [
  { title: 'Specialized Support', desc: 'Deep industry knowledge and practical, real-world business backing.' },
  { title: 'Transparent Pricing', desc: 'Straightforward plans so you know what to expect as your business grows.' },
  { title: 'Reliable Results', desc: 'Proven processes focused on measurable and reliable growth.' },
  { title: 'Clear Communication', desc: 'Friendly, timely, and simple communication when you need it most.' },
];

const WhyUs: React.FC = () => {  

  const images = [img1, img2, img3];
  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="py-24 from-gray-900 via-gray-900/95 to-blue-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full border border-purple-700 text-purple-300 text-sm">Our Guarantee</div>
        <h3 className="mt-6 text-3xl md:text-4xl font-heading font-bold">Why Choose Caligula's Drain Sewer Cleaning</h3>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">Expertise and support designed to help your company scale with confidence.</p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray/30 p-4">
            <div className="relative h-96">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`why-${i}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-500 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white/90 mb-4">What Makes Us Different</h4>
          <div className="space-y-4 hover-30">
            {features.map((f, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-4 border border-purple-700/20 rounded-lg bg-white/5 transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-white/10 hover:border-purple-400"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-700/20 flex items-center justify-center text-purple-300 transition-colors duration-300 group-hover:bg-purple-500 group-hover:text-white">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-semibold transition-colors duration-300 group-hover:text-white">{f.title}</h5>
                  <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

