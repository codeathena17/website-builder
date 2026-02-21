import React from 'react';
import { Code2, Smartphone, LineChart, Divide } from 'lucide-react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';  

const servicesData = [
  {
    icon: Code2,
    title: 'Basic Service Appointment ',
    bullets: [
      'Ideal for minor clogs and routine maintenance.',
     'Minimum price per service appointment start booking and pay',
    ],
    price: 'Starting at $97.77',
    payment:97.77,
    href: '#contact',
  },
  {
    icon: Smartphone,
    title: 'Multi-Service Cleaning Package',
    bullets: [
      'Special serivce package for multiple drain cleaning needs. Perfect for homes with several plumbing fixtures.',
      'You get up to 4 openings: drain, basic  cleaned sink, tub, toilet, or shower at'  ,
],
 price: 'Package price $197.77',
    payment: 197.77,
    href: '#contact',
  },
  {
    icon: LineChart,
    title: 'Sewer Line Service',
    bullets: [
      'Comprehensive maintenance for your main sewer line to prevent major blockages and backups.',
       'Main Sewer Line Basic Maintenance Cleaning charges.' 
    ],
     price: 'Service price $377.77',
    payment: 99.5-377.77,
    href: '#contact',
  },
];

const ServicesComponent: React.FC = () => {
  return (
    <section id="services" className="py-24 from-gray-900 to-blue-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-gray-300 text-sm mb-6">Services</div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Back-Office Support, Done For You</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">Three core ways we keep your operations organised, compliant, and moving forward.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch lg:divide-x lg:divide-gray-800">
          {servicesData.map((s, i) => {
            const Icon = s.icon as any;
            const highlighted = i === 1; // center card
            return (
              <div
  key={i}
  className="group relative transition-transform duration-300 hover:-translate-y-2"
>
  <div
    className="
      bg-white backdrop-blur-md p-8 h-full
      border border-gray-700
      transition-all duration-300
      group-hover:border-blue-400
      group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
    "
  >{/* Image */}
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={i === 0 ? card1 : i === 1 ? card2 : card3}
        alt={s.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
              
      <div className="flex items-center gap-3 mb-4">
      <div
        className="
          w-10 h-10 rounded-lg bg-gray-800
          flex items-center justify-center
          transition-colors duration-300
          group-hover:bg-blue-500/20
        "
      >
        <Icon className="w-5 h-5 text-white/90" />
      </div>

      <h3 className="text-lg font-semibold text-black">
        {s.title}
      </h3>
    </div>
                  <ul className="text-sm text-black list-disc list-inside space-y-2 mb-4">
                    {s.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                  {/* Bottom CTA  */}
                  <div className="mt-auto flex flex-col items-center gap-3">
                    <span className="text-xl font-bold text-white">{s.price}</span>
                    <a
    href={s.href}
    className="
      inline-flex items-center justify-center
      px-6 py-3 rounded-full
      bg-blue-600 text-white font-bold
      transition-all duration-300
      hover:bg-blue-500
      hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
    "
  >
    Pay ${s.payment}
  </a>
            </div>
</div>
              </div>
            );
          })}
        </div> 
            

        <p className="text-xs text-gray-300 mt-10">One partner for everything that slow your works.</p>
      </div>
    </section>
  );
};

export default React.memo(ServicesComponent);