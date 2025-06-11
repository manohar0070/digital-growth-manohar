
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
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blog Content for Health Brand",
      objective: "Build authority and SEO traffic",
      tools: "WordPress, SurferSEO, Grammarly",
      result: "25+ blogs published, avg. 1.5k views/month",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Product Description Overhaul for Clothing Line",
      objective: "Improve conversion rate",
      tools: "Shopify, Copywriting Frameworks",
      result: "+15% add-to-cart rate after rewrite",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Case studies showcasing my work and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card overflow-hidden group border border-gray-200"
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Objective:</span> {project.objective}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Tools Used:</span> {project.tools}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Result:</span> {project.result}
                  </p>
                </div>
                
                <div className="mt-auto pt-2">
                  <button className="inline-flex items-center text-marketing-600 hover:text-marketing-800 font-medium">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
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
