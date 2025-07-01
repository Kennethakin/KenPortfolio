import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import PageWrapper from '../components/PageWrapper';

const Projects = () => {
  const gradients = [
    'from-[#FFD700] via-white to-blue-600', // Gold → White → Blue
    'from-blue-600 via-[#FFD700] to-white', // Blue → Gold → White
    'from-white via-blue-500 to-[#FFD700]', // White → Blue → Gold
  ];

  return (
    <PageWrapper>
      <div className="w-full">
    

        {projects.map((project, index) => (
          <section
            key={index}
            className={`w-full min-h-[60vh] bg-gradient-to-r ${gradients[index % gradients.length]} px-6 py-12 flex items-center justify-center`}
          >
            <div className="w-full max-w-4xl">
              <ProjectCard {...project} />
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;
