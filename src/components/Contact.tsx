
import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MessageSquare, Send, Linkedin, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thanks for your message! I\'ll get back to you soon.', {
        description: 'Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Let's work together! I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-up">
            <div className="card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-marketing-600 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:manoharnaidu0007@gmail.com" className="text-gray-600 hover:text-marketing-600 transition-colors duration-300">
                      manoharnaidu0007@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-marketing-600 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/918297391899" className="text-gray-600 hover:text-marketing-600 transition-colors duration-300">
                      +91 82973 91899
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <User className="h-5 w-5 text-marketing-600 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-gray-600">Pilla Manohar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/pilla-manohar-492058256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/mr.manohar_007?igsh=dHlpY3dscmNtbDF1" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/growthzone07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="card animate-slide-up transition-all duration-500 hover:shadow-xl shadow-lg" style={{ animationDelay: '200ms' }}>
            <div 
              style={{
                width: '100%',
                height: '500px'
              }} 
              data-fillout-id="8Q2dhL6DY7us" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
