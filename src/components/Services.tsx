
import React from 'react';
import { Facebook, Search, FileText, Tag, Instagram } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-marketing-600" />,
      title: 'Meta Ads Management',
      description: 'Run highly targeted ad campaigns on Facebook & Instagram to drive conversions, traffic, and engagement.',
      pricing: 'Starting from ₹3,000/month'
    },
    {
      icon: <Search className="h-10 w-10 text-marketing-600" />,
      title: 'SEO (On-Page & Off-Page)',
      description: 'Improve your website\'s visibility with keyword optimization, backlinks, and technical SEO.',
      pricing: 'Starting from ₹2,500'
    },
    {
      icon: <FileText className="h-10 w-10 text-marketing-600" />,
      title: 'Content & Blog Writing',
      description: 'High-quality, SEO-friendly content to engage your audience and improve search rankings.',
      pricing: 'Starting from ₹1/word'
    },
    {
      icon: <Tag className="h-10 w-10 text-marketing-600" />,
      title: 'Product Description Writing',
      description: 'Turn product features into irresistible benefits with clear, compelling descriptions.',
      pricing: 'Starting from ₹150/product'
    },
    {
      icon: <Instagram className="h-10 w-10 text-marketing-600" />,
      title: 'Social Media Management',
      description: 'Plan, post, and grow your presence across platforms with engaging visuals and captions.',
      pricing: 'Starting from ₹4,000/month'
    }
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Expert digital marketing solutions to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <p className="font-medium text-marketing-700">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
