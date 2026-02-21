import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Schedule a Call',
    desc: 'Tell us about your business, challenges, and the support you need.',
  },
  {
    id: 2,
    title: 'Choose Your Services',
    desc: 'Select a recommended package or build a plan tailored to your needs.',
  },
  {
    id: 3,
    title: 'We Get to Work',
    desc: 'We handle the admin, paperwork, and back-office tasks quietly in the background.',
  },
  {
    id: 4,
    title: 'Ongoing Support',
    desc: 'Receive updates, reports, and dependable communication at every step.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="inline-block px-4 py-1 rounded-full border border-purple-200 text-purple-600 text-sm">Process</div>
        <h3 className="mt-6 text-3xl md:text-4xl font-heading font-bold text-gray-900">How We Work With You</h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A simple, streamlined process designed to support your business with clarity and confidence.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Connecting Line (desktop) */}
        <div className="hidden lg:block absolute top-28 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-800/80 to-transparent z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-start justify-items-center">
          {steps.map((step) => (
            <div key={step.id} className="relative group flex justify-center">
              {/* Number circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-semibold border border-purple-100 shadow transform transition-transform duration-300 group-hover:scale-110">
                  {step.id}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-50 text-center w-56 transform transition-transform duration-300 group-hover:-translate-y-3 group-hover:shadow-lg">
                <h4 className="text-purple-600 font-semibold mb-2 transition-colors duration-300 group-hover:text-purple-700">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>

              {/* small connector node visible on large screens */}
              <div className="hidden lg:block absolute left-1/2 top-2 transform -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-purple-200 rounded-full transition-colors duration-300 group-hover:bg-purple-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;