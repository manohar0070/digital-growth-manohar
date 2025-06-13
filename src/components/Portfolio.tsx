
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce SEO & Ads for Intoobox (Shopify Store)",
      objective: "Drive organic traffic and boost sales",
      tools: "Shopify, Meta Ads, Canva, Google Search Console",
      result: "40% increase in organic traffic in 3 months",
      image: "/lovable-uploads/67a713b8-d260-4292-b835-e69ea6058362.png",
      link: "https://intoobox.com/"
    },
    {
      title: "Worked on AWSpeechless.com – Freelance Project",
      objective: "Boost search visibility and improve Google ranking",
      tools: "SEO optimization, Content Management, Google Search Console",
      result: "Product listings with compelling descriptions and improved SEO performance",
      image: "/lovable-uploads/20d545da-7864-4525-97cc-bc8f7f9a4308.png",
      period: "Jan 2025 – March 2025"
    },
    {
      title: "Khaalis Solar – Social Media Launch & Content Creation",
      objective: "Build brand presence & drive awareness for clean energy",
      tools: "Canva, InVideo AI, Copywriting Techniques",
      result: "+25% engagement rate growth in 4 weeks",
      image: "/lovable-uploads/49337316-f384-41a1-b280-87b437e374f4.png",
      link: "https://www.instagram.com/khaalis.solar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    }
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Case studies showcasing my work and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card overflow-hidden group border border-gray-200 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl animate-slide-up shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-marketing-600 transition-colors duration-300">{project.title}</h3>
                
                {project.period && (
                  <p className="text-sm text-gray-500 mb-3 font-medium">{project.period}</p>
                )}
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">
                    <span className="font-medium text-gray-700">Objective:</span> {project.objective}
                  </p>
                  <p className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">
                    <span className="font-medium text-gray-700">Tools Used:</span> {project.tools}
                  </p>
                  <p className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">
                    <span className="font-medium text-gray-700">Result:</span> {project.result}
                  </p>
                </div>
                
                <div className="mt-auto pt-2">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-marketing-600 hover:text-marketing-800 font-medium transition-all duration-300 group-hover:translate-x-2"
                    >
                      Visit Website
                      <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <button className="inline-flex items-center text-marketing-600 hover:text-marketing-800 font-medium transition-all duration-300 group-hover:translate-x-2">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
