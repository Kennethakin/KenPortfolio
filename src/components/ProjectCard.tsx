import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
};

const ProjectCard = ({ title, description, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-lg p-8 w-full"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">🔗 Live</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:underline">💻 Code</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
