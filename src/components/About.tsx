
import React from 'react';
import { Palette, FileText, Megaphone, Laptop, Download } from 'lucide-react';

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      icon: <Palette className="h-8 w-8 text-marketing-600" />,
      title: 'Design',
      description: 'Photoshop, Canva'
    },
    {
      icon: <FileText className="h-8 w-8 text-marketing-600" />,
      title: 'Content',
      description: 'Copywriting, Product Descriptions, Blog Writing'
    },
    {
      icon: <Megaphone className="h-8 w-8 text-marketing-600" />,
      title: 'Marketing',
      description: 'Meta Ads, On-page & Off-page SEO, Social Media'
    },
    {
      icon: <Laptop className="h-8 w-8 text-marketing-600" />,
      title: 'Tech',
      description: 'WordPress, Shopify, AI Tools'
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about my background and expertise in digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-700 transform transition-all duration-500 hover:translate-x-2">
              I'm Manohar, a results-driven digital marketer with a strong foundation in eCommerce, content creation, advertising, and SEO. Over the past year, I've worked with growing businesses to elevate their online presence through data-backed strategies and creative execution.
            </p>
            
            <p className="text-lg text-gray-700 transform transition-all duration-500 hover:translate-x-2">
              When I'm not optimizing campaigns, I'm exploring the latest in AI, content trends, and digital branding.
            </p>
            
            <a
              href="https://drive.google.com/file/d/18G9zJztwoE-MAtwmvbO1txCMQFBL-NMO/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4 inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="card hover:border-marketing-300 group transition-all duration-500 hover:-translate-y-3 hover:shadow-xl animate-slide-up shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-marketing-600 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
