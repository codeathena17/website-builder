import React from "react";
import { Eye, Lightbulb, Target } from "lucide-react";
import aboutImage from "../assets/About.jpg";

const AboutComponent: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
     
        {/* LEFT SIDE - IMAGE */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={aboutImage}
            alt="About"
            className="w-full h-full object-cover"
          />

          {/* Light overlay like sample */}
          <div className="absolute inset-0 bg-white-500/60"></div>
        </div>

        {/* RIGHT SIDE - VISION / MISSION / GOALS */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300"></div>

          <div className="space-y-16 relative">
            
            {/* Vision */}
            <div className="flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
                  <Eye className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-600 mb-2">
                  Vision
                </h3>
                <p className="text-gray-600">
                   To ensure you and your loved ones a full, safe, and healthy enjoyment of your home, without the unwanted, nasty odor that comes out from every dirty drain full of germs and microbes.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                  <Lightbulb className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Mission
                </h3>
                <p className="text-gray-600">
                  Provide reliable and timely drain and sewer cleaning services to ensure smooth, trouble-free plumbing for our customers.
                  Build long-term relationships by offering exceptional customer service, rapid response times, and dependable solutions.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center shadow-lg">
                  <Target className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Goals
                </h3>
                <p className="text-gray-600">
                   Help every family maintain clean drains and sewer lines by providing regular service for the basic drain cleaning investment.
                  
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(AboutComponent);
