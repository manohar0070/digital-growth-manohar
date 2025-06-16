import React from 'react';
import { Palette, FileText, Megaphone, Laptop, Download, GraduationCap, Briefcase, Rocket, Bot, Globe } from 'lucide-react';
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
      icon: <Palette className="h-6 w-6 text-marketing-600" />,
      title: 'Design',
      description: 'Photoshop, Canva'
    },
    {
      icon: <FileText className="h-6 w-6 text-marketing-600" />,
      title: 'Content',
      description: 'Copywriting, Product Descriptions, Blog Writing'
    },
    {
      icon: <Megaphone className="h-6 w-6 text-marketing-600" />,
      title: 'Marketing',
      description: 'Meta Ads, On-page & Off-page SEO, Social Media'
    },
    {
      icon: <Laptop className="h-6 w-6 text-marketing-600" />,
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
      description: 'Explored 15+ AI Tools for Content, Marketing, Design & Automation',
      period: 'April 2025 – Present'
    }
  ];

  const tools = [
    { name: 'Ubersuggest', imageUrl: 'https://www.blog.123coimbatore.com/uploads/blog-images/30-03-2021_10-37-09_us.jpg' },
    { name: 'Ahrefs', imageUrl: 'https://ahrefs.com/assets/esbuild/a-blue-RPW5GNUX.png' },
    { name: 'SEMrush', imageUrl: 'https://cdn.brandfetch.io/semrush.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed' },
    { name: 'Google Analytics', imageUrl: 'https://img.freepik.com/premium-vector/google-analytics-logo_1273375-887.jpg' },
    { name: 'Google Search Console', imageUrl: 'https://logowik.com/content/uploads/images/google-search-console4537.logowik.com.webp' },
    { name: 'Google Ads', imageUrl: 'https://i.pinimg.com/564x/75/2b/38/752b3880473ea42b5c9e82e00dc6a2bf.jpg' },
    { name: 'Meta Ads Manager', imageUrl: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/12824360/LoaZukDKgdpYEP10QWwBQGSz2FG2.png' },
    { name: 'Shopify', imageUrl: 'https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp' },
    { name: 'WordPress', imageUrl: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'Yoast SEO', imageUrl: 'https://delante.co/wp-content/uploads/2022/11/yoast-seo-features.jpg' },
    { name: 'Rank Math', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_PPoTOOFAMHuZUch_dtwf3zpFbcCWvS8bg&s' },
    { name: 'All in One SEO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRsP6_QcMTqaxk3qi579RcV1-7Ycl8xBrMQ&s' },
    { name: 'Grammarly', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSh-Q3dSwHZ7dZhMyuBXjrowPbz5I9pOPrKg&s' },
    { name: 'Google My Business', imageUrl: 'https://images.seeklogo.com/logo-png/32/1/google-my-bussines-logo-png_seeklogo-329002.png' },
    { name: 'Facebook', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { name: 'Instagram', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
    { name: 'LinkedIn', imageUrl: 'https://logowik.com/content/uploads/images/329_linkedin.jpg' },
    { name: 'WhatsApp', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' }
  ];

  const ToolCard = ({ tool }: { tool: typeof tools[0] }) => {
    return (
      <div className="group cursor-pointer">
        <div className="flex flex-col items-center space-y-2">
          <div className="
            w-14 h-14 rounded-full bg-white border border-gray-200
            flex items-center justify-center
            shadow-sm
            transition-all duration-300 ease-out
            group-hover:scale-105 group-hover:shadow-md group-hover:border-marketing-300
            group-hover:-translate-y-1
            overflow-hidden
            p-2
          ">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
              <img 
                src={tool.imageUrl} 
                alt={`${tool.name} logo`}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-6 h-6 bg-gradient-to-br from-marketing-500 to-marketing-600 rounded-full flex items-center justify-center text-white font-bold text-xs">${tool.name.charAt(0)}</div>`;
                  }
                }}
              />
            </div>
          </div>
          <span className="text-xs font-medium text-gray-700 text-center leading-tight max-w-full truncate px-1">
            {tool.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about my background and expertise in digital marketing
          </p>
        </div>

        {/* About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Manohar, a results-driven digital marketer with a strong foundation in eCommerce, content creation, advertising, and SEO. Over the past year, I've worked with growing businesses to elevate their online presence through data-backed strategies and creative execution.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not optimizing campaigns, I'm exploring the latest in AI, content trends, and digital branding.
            </p>
            
            <a
              href="https://drive.google.com/file/d/18G9zJztwoE-MAtwmvbO1txCMQFBL-NMO/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-marketing-300 group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-marketing-600 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Journey Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 animate-fade-in mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional growth and AI exploration
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600 hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="relative md:pl-16 animate-slide-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-3 top-1 w-6 h-6 bg-marketing-600 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-marketing-500 hidden md:flex">
                    {item.icon}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-marketing-400/30 transition-all duration-300 group-hover:bg-white/10">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-marketing-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    )}
                    <p className="text-sm text-gray-400">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional SEO & Marketing Tools Section */}
        <div className="bg-gray-50 rounded-2xl py-12 px-6 md:px-8 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-marketing-600 to-marketing-700 rounded-2xl mb-4 shadow-lg">
              <Globe className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Professional SEO & Marketing Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools I use to drive digital success
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 md:gap-6">
              {tools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <AITools />
      </div>
    </section>
  );
};

export default About;
