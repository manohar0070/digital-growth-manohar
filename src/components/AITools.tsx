
import React from 'react';

interface Tool {
  name: string;
  url: string;
  logo: string;
  description?: string;
}

const aiTools: Tool[] = [
  { 
    name: 'WATI', 
    url: 'https://wati.io', 
    logo: 'https://www.wati.io/wp-content/uploads/2024/11/wati-logo-jpg-format.jpg'
  },
  { 
    name: 'FishAudio', 
    url: 'https://fish.audio', 
    logo: 'https://pbs.twimg.com/profile_images/1779922733582958592/9u3qMlD8_200x200.jpg'
  },
  { 
    name: 'InVideo.ai', 
    url: 'https://invideo.ai', 
    logo: 'https://cdn.techjockey.com/web/assets/images/techjockey/products/15229_invideo.jpg'
  },
  { 
    name: 'Gamma', 
    url: 'https://gamma.app', 
    logo: 'https://gamma.app/favicon.ico'
  },
  { 
    name: 'Meta AI', 
    url: 'https://ai.meta.com', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZyHRFu21iORAH4_7rpybEDtM06lR_lWsRQ&s'
  },
  { 
    name: 'Copilot', 
    url: 'https://copilot.microsoft.com', 
    logo: 'https://copilot.microsoft.com/favicon.ico'
  },
  { 
    name: 'Bolt.new', 
    url: 'https://bolt.new', 
    logo: 'https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg'
  },
  { 
    name: 'Gemini', 
    url: 'https://gemini.google.com', 
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg'
  },
  { 
    name: 'ChatGPT', 
    url: 'https://chat.openai.com', 
    logo: 'https://chat.openai.com/favicon.ico'
  },
  { 
    name: 'Perplexity', 
    url: 'https://perplexity.ai', 
    logo: 'https://perplexity.ai/favicon.svg'
  },
  { 
    name: 'HeyGen', 
    url: 'https://heygen.com', 
    logo: 'https://heygen.com/favicon.ico'
  },
  { 
    name: 'Leonardo.ai', 
    url: 'https://leonardo.ai', 
    logo: 'https://brandlogos.net/wp-content/uploads/2025/05/leonardo_ai-logo_brandlogos.net_ctjsa.png'
  },
  { 
    name: 'Lovable', 
    url: 'https://lovable.dev', 
    logo: 'https://lovable.dev/favicon.ico'
  },
  { 
    name: 'Mailchimp', 
    url: 'https://mailchimp.com', 
    logo: 'https://static-00.iconduck.com/assets.00/mailchimp-icon-2048x2048-7tjwbg42.png'
  },
  { 
    name: 'Canva', 
    url: 'https://canva.com', 
    logo: 'https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg'
  },
  { 
    name: 'Napkin.ai', 
    url: 'https://napkin.ai', 
    logo: 'https://napkin.ai/favicon.ico'
  },
  { 
    name: 'Minmax.ai', 
    url: 'https://minmax.ai', 
    logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/minimax-color.png'
  },
  { 
    name: 'Manus', 
    url: 'https://manus.im', 
    logo: 'https://manus.im/favicon.ico'
  },
  { 
    name: 'DeepSeek', 
    url: 'https://deepseek.com', 
    logo: 'https://static.vecteezy.com/system/resources/previews/055/607/320/non_2x/deepseek-app-icon-on-transparent-background-free-png.png'
  },
  { 
    name: 'Grok', 
    url: 'https://grok.x.ai', 
    logo: 'https://st1.latestly.com/wp-content/uploads/2025/02/Grok-Logo.jpg'
  },
];

const AITools = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-12 mt-8 md:mt-16 rounded-lg mx-2 md:mx-0">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-gray-900">
            🚀 AI Tools I Use
          </h3>
          <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-marketing-500 to-marketing-600 mx-auto rounded-full mb-2 md:mb-3"></div>
          <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto px-4">
            Essential AI tools for productivity and creativity
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3 lg:gap-4">
          {aiTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-2 md:p-3 rounded-xl bg-white border border-gray-200 hover:border-marketing-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up shadow-sm"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
              }}
              title={tool.name}
            >
              {/* Logo Container */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 md:mb-2 bg-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 overflow-hidden border border-gray-100 group-hover:border-marketing-200">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-white font-bold text-xs">${tool.name.charAt(0)}</span>`;
                      parent.className = parent.className.replace('bg-gray-50', 'bg-gradient-to-br from-marketing-500 to-marketing-600');
                    }
                  }}
                />
              </div>
              
              {/* Tool Name */}
              <span className="text-xs font-medium text-center text-gray-600 group-hover:text-marketing-700 transition-colors duration-300 leading-tight max-w-full truncate px-1">
                {tool.name}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 md:mt-8 text-center">
          <span className="text-gray-500 text-xs px-4">
            Constantly exploring new AI innovations
          </span>
        </div>
      </div>
    </div>
  );
};

export default AITools;
