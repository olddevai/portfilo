import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/portfolio/ProjectCard';
import { Project } from '../types';

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'web' | '3d' | 'combined'>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce 3D Product Viewer',
      description: 'Interactive 3D product visualization for an e-commerce platform.',
      category: 'combined',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      technologies: ['Three.js', 'React', 'WebGL', 'Tailwind CSS'],
    },
    {
      id: '2',
      title: 'Architectural Visualization',
      description: '3D visualization for a modern architectural project.',
      category: '3d',
      imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      technologies: ['Blender', 'V-Ray', '3ds Max'],
    },
    {
      id: '3',
      title: 'SaaS Dashboard',
      description: 'Modern dashboard interface for a SaaS platform.',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our latest projects showcasing our expertise in 3D design and
            web development.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {['all', 'web', '3d', 'combined'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as typeof filter)}
                className={`px-6 py-2 rounded-full ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;