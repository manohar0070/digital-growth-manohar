
import React from 'react';
import { Bot } from 'lucide-react';

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
    <div className="bg-gradient-to-br from-marketing-50 to-blue-50 rounded-2xl py-12 px-6 md:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <Bot className="w-7 h-7 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            AI Tools I Use
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI tools that enhance my productivity and creativity
          </p>
        </div>

        {/* Tools Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6">
            {aiTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-3 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up shadow-sm"
                style={{
                  animationDelay: `${index * 30}ms`,
                  animationFillMode: 'both'
                }}
                title={tool.name}
              >
                {/* Logo Container */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden border border-gray-100 group-hover:border-purple-200 p-2">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-6 h-6 object-contain transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">${tool.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>
                
                {/* Tool Name */}
                <span className="text-xs font-medium text-center text-gray-600 group-hover:text-purple-700 transition-colors duration-300 leading-tight max-w-full truncate">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Constantly exploring new AI innovations to stay ahead of the curve
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITools;
