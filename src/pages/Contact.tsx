
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ContactButton from '@/components/ContactButton';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const proprietorInfo = {
    name: "Elena & Michael Rodriguez",
    description: "As your hosts, we bring over 15 years of hospitality experience and a deep love for our local culture. We started this homestay to share the beauty of our region with travelers seeking an authentic experience. We look forward to welcoming you!",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-homestay-green" />,
      title: "Phone",
      info: "+1 (234) 567-890",
      action: "tel:+1234567890"
    },
    {
      icon: <Mail className="h-5 w-5 text-homestay-green" />,
      title: "Email",
      info: "info@cozyretreat.com",
      action: "mailto:info@cozyretreat.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-homestay-green" />,
      title: "Address",
      info: "123 Nature Lane, Peaceful Valley, CA 98765",
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-homestay-green" />,
      title: "Check-in Hours",
      info: "2:00 PM - 8:00 PM",
      action: null
    }
  ];

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-homestay-sand bg-white focus:outline-none focus:ring-2 focus:ring-homestay-green transition-shadow";

  return (
    <PageTransition>
      <section className="pt-24 pb-16">
        <div className="homestay-container">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-homestay-brown mb-4">
              Contact Us
            </h1>
            <p className="text-homestay-brown/80">
              Have questions or ready to book? We're here to help make your stay perfect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-display font-semibold text-homestay-brown mb-6">
                Get in Touch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-5 rounded-2xl shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="bg-homestay-sand/30 p-3 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-homestay-brown mb-1">
                          {item.title}
                        </h3>
                        <a 
                          href={item.action || undefined}
                          className={`text-homestay-brown/70 ${item.action ? 'hover:text-homestay-green transition-colors' : ''}`}
                        >
                          {item.info}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-md h-80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1688226551010!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map location of Cozy Retreat Homestay"
                ></iframe>
              </motion.div>

              {/* Proprietor Info */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-xl font-display font-semibold text-homestay-brown mb-4">
                  Meet Your Hosts
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={proprietorInfo.image}
                      alt={proprietorInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-homestay-brown mb-2 text-center md:text-left">
                      {proprietorInfo.name}
                    </h3>
                    <p className="text-homestay-brown/70 text-sm">
                      {proprietorInfo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-md">
                <h2 className="text-2xl font-display font-semibold text-homestay-brown mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-homestay-brown mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-homestay-brown mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-homestay-brown mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Booking Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-homestay-brown mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={inputClasses}
                      placeholder="Let us know how we can help you..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-homestay-green text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-homestay-green/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactButton phoneNumbers={["8431534435", "94488 19406"]} />
    </PageTransition>
  );
};

export default Contact;
