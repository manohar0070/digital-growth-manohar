
import React, { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thanks for your message! I\'ll get back to you soon.', {
        description: 'Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Let's work together! I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-marketing-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:manoharnaidu0007@gmail.com" className="text-gray-600 hover:text-marketing-600">
                      manoharnaidu0007@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-marketing-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/918297391899" className="text-gray-600 hover:text-marketing-600">
                      +91 82973 91899
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-5 w-5 text-marketing-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-gray-600">Pilla Manohar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <a href="#" className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-marketing-600 hover:bg-marketing-700" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
