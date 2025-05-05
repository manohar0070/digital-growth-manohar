
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-marketing-600">Manohar</span>
              <span className="block">Digital Marketer</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              I specialize in creating impactful digital strategies that drive results. From compelling content to high-performing campaigns.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-primary"
              >
                See My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Let's Work Together
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-marketing-500 to-marketing-700 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/4937df5e-6a98-4682-807d-8c7d2d02a37d.png" 
                  alt="Manohar - Digital Marketing Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className={cn(
                "absolute w-20 h-20 rounded-lg bg-white shadow-lg p-4 flex items-center justify-center",
                "top-0 -left-10 md:-left-16"
              )}>
                <div className="text-marketing-600 text-lg font-bold">1+</div>
                <div className="text-xs text-gray-600">Years Exp</div>
              </div>
              
              <div className={cn(
                "absolute w-24 h-24 rounded-lg bg-white shadow-lg p-3 flex items-center justify-center",
                "bottom-0 -right-8 md:-right-12"
              )}>
                <span className="text-sm text-gray-800 text-center">
                  Let's turn clicks into customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
