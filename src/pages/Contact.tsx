import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: '123 Innovation Street, Tech City, TC 12345',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'hello@digitalcraft.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600">{info.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;