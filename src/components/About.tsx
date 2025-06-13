import React from 'react';
import { Palette, FileText, Megaphone, Laptop, Download, GraduationCap, Briefcase, Rocket, Bot } from 'lucide-react';
import AITools from './AITools';

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

  const timeline = [
    {
      icon: <GraduationCap className="h-4 w-4" />,
      title: 'Digital Marketing Certification – Tech Mahindra Foundation',
      period: 'Feb – June 2024'
    },
    {
      icon: <Briefcase className="h-4 w-4" />,
      title: 'Joined INTOOBOX as a Digital Marketing Executive',
      period: 'July 2024 – March 2025'
    },
    {
      icon: <Rocket className="h-4 w-4" />,
      title: 'Furi media services as a Digital Marketing Executive',
      period: 'April 2025 – Present'
    },
    {
      icon: <Bot className="h-4 w-4" />,
      title: 'Explored 15+ AI Tools for Content, Marketing, Design & Automation',
      period: '2025 – Present'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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

        {/* My Journey Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-gray-300">
              A timeline of my professional growth and AI journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            <ul className="space-y-8">
              {timeline.map((item, index) => (
                <li 
                  key={index} 
                  className="relative pl-16 animate-slide-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-3 top-1 w-6 h-6 bg-marketing-600 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-marketing-500">
                    {item.icon}
                  </div>
                  
                  <div className="transform transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-marketing-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Tools Section */}
        <AITools />
      </div>
    </section>
  );
};

export default About;
