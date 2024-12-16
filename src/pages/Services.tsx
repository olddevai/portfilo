import React from 'react';
import { motion } from 'framer-motion';
import { Cube, Code, Layers, Palette, Database, Globe } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';

const Services = () => {
  const services = [
    {
      title: '3D Modeling & Design',
      description: 'Create stunning 3D models and visualizations for your products and projects.',
      Icon: Cube,
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites using the latest technologies.',
      Icon: Code,
    },
    {
      title: 'Interactive Experiences',
      description: 'Combine 3D and web technologies for immersive user experiences.',
      Icon: Layers,
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive and beautiful user interfaces that convert.',
      Icon: Palette,
    },
    {
      title: 'Backend Development',
      description: 'Robust backend solutions to power your applications.',
      Icon: Database,
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to achieve your business goals.',
      Icon: Globe,
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
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business
            thrive in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;