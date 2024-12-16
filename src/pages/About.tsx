import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/about/TeamMemberCard';
import { TeamMember } from '../types';

const About = () => {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Creative Director',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Over 10 years of experience in 3D design and creative direction.',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Lead Developer',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Full-stack developer with expertise in WebGL and Three.js.',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Passionate about creating intuitive and beautiful user experiences.',
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
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate creators dedicated to pushing the boundaries
            of digital experiences through innovative 3D design and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create innovative digital experiences that merge the worlds of 3D
              design and web development, helping businesses stand out in the
              digital landscape through immersive and engaging solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be at the forefront of digital innovation, setting new standards
              for interactive experiences and helping shape the future of the web
              through cutting-edge 3D and web technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;