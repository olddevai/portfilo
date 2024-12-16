import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="relative mb-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-indigo-600 mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex justify-center space-x-3">
          <button className="text-gray-600 hover:text-indigo-600">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-indigo-600">
            <Twitter className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;