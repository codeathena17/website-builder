import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactComponent: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '',problem:'', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '',problem:'', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 relative">
       {/* Background gradient */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="mb-24 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Ready to start our journey?</h2>
            <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
               If You Wait, You Pay. Big Time. Delaying costs you. Act now and get all the drains in your house cleaned for a minimal price for basic drain cleaning service. Waiting for a drain blockage to occur creates a bigger hassle, problems, and $$$tickets.
            </p>
            <button className="px-8 py-4 bg-yellow-400 text-blue-700 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300">
              Book a call with our team
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Let's talk
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Have a problem with your drains? We'd love to hear from you. Fill out the form or reach out directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-lg border border-gray-300">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg">Email Us</h4>
                  <p className="text-gray-700">hello@novadigital.com</p>
                  <p className="text-gray-700">careers@novadigital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-lg border border-gray-300">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-700">123 Innovation Dr, Suite 400</p>
                  <p className="text-gray-700">San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-lg border border-gray-300">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg">Call Us</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                  <p className="text-gray-700">Mon-Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">Problem</label>
                <select
                  type="text"
                  id="problem"
                  value={formState.problem}
                  onChange={(e) => setFormState({...formState, problem: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  placeholder="Describe the problem with your drains..."
                  required
                  >
                <option value="foul_odors">Foul Odors</option>
                <option value="slow">Slow Drain</option>
                <option value="leaking">Leaking Pipes</option>
                <option value="Blocked">Blocked Drain</option>
                <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactComponent);