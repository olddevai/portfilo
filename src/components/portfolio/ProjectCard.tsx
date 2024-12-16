import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
          View Project <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;