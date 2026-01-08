import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { API_BASE_URL } from '@/config/api';
import { useSettings } from '@/hooks/useSettings';
import heroBg from '@/assets/heroimg/hr4.webp';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: settings } = useSettings();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Meenakshi CHS, Plot 38, Sector 16, New Panvel east'],
      link: 'https://maps.google.com/?q=Meenakshi+CHSL+New+Panvel'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: [settings?.contactNumber || '+91 8928237775'],
      link: `tel:${settings?.contactNumber}`
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [settings?.email || 'info@meenakshichsl.com'],
      link: `mailto:${settings?.email || 'info@meenakshichsl.com'}`
    },

    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: [settings?.whatsappNumber || '+91 8928237775'],
      link: `https://wa.me/${settings?.whatsappNumber}`
    },
  ];

  const services = [
    'Custom Joinery Seal Solutions',
    'Industrial Fire Safety Consultation',
    'Advanced Fire Protection Systems',
    'Glass to Glass Joint Seals',
    'Fire Stopping Products',
    'Safety & Fire Rated Glasses'
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          {/* Gradient removed as per user request to keep image clear */}
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl inline-block w-full max-w-full"
            >
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-6 text-white drop-shadow-sm">
                Get In <span className="text-[#F58220]">Touch</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-xl text-gray-100 leading-relaxed font-bold tracking-wide drop-shadow-sm px-1">
                Have a question or ready to start your project? We're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-[#F58220] to-[#e67619] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3 text-gray-900 dark:text-white">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.link ? (
                          <a href={idx === 0 ? info.link : `tel:${detail.replace(/\s/g, '')}`} className="hover:text-[#F58220] transition-colors font-medium">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left Side - Form */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="mb-8">
                    <h2 className="font-heading text-3xl font-black mb-3 text-gray-900 dark:text-white">Send Us a Message</h2>
                    <p className="text-gray-600 dark:text-gray-300">Fill out the form and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-gray-300 dark:border-gray-600 focus:border-[#F58220] focus:ring-[#F58220]"
                          placeholder="John Doe"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-gray-300 dark:border-gray-600 focus:border-[#F58220] focus:ring-[#F58220]"
                          placeholder="+974 XXXX XXXX"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 dark:border-gray-600 focus:border-[#F58220] focus:ring-[#F58220]"
                        placeholder="john@example.com"
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="resize-none border-gray-300 dark:border-gray-600 focus:border-[#F58220] focus:ring-[#F58220]"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#F58220] to-[#e67619] hover:from-[#e67619] hover:to-[#F58220] text-white font-bold h-14 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Right Side - Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#0D4F5C] to-[#062830] p-8 lg:p-12 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F58220] p-3 rounded-lg">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Call Us</p>
                        <a href={`tel:${settings?.contactNumber}`} className="text-gray-300 hover:text-[#F58220] transition-colors block">{settings?.contactNumber || '+91 8928237775'}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#F58220] p-3 rounded-lg">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">WhatsApp</p>
                        <a href={`https://wa.me/${settings?.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#F58220] transition-colors block">{settings?.whatsappNumber || '+91 8928237775'}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#F58220] p-3 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email Us</p>
                        <a href={`mailto:${settings?.email}`} className="text-gray-300 hover:text-[#F58220] transition-colors break-all">{settings?.email || 'info@meenakshichsl.com'}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#F58220] p-3 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Visit Us</p>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{settings?.address || 'Meenakshi CHS, Plot 38, Sector 16,\nNew Panvel East, Maharashtra'}</p>
                      </div>
                    </div>


                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-sm text-gray-300 mb-4">We're committed to providing excellent service</p>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <CheckCircle key={star} className="h-5 w-5 text-[#F58220]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-black mb-3 text-gray-900 dark:text-white">
              Find Us on <span className="text-[#F58220]">Map</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Located in Kamothe, Navi Mumbai, Maharashtra</p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.952936223751!2d73.08560478996165!3d19.02075857177415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d838655555%3A0x31088f2b350f59e7!2sBhoomi%20Towers!5e0!3m2!1sen!2sin!4v1765515619275!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhoomi Towers - Sejal Industrial Solutions Corporate Office"
              className="w-full"
            />
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;