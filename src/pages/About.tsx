import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'PHP', level: 80 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Front-End Dev', level: 90 },
  { name: 'Back-End Dev', level: 78 },
];

const About = () => {
  const allSkills = [...skills, ...skills]; // Duplicate for seamless loop

  return (
    <PageWrapper>
      <section className="relative min-h-screen w-full bg-gradient-to-b from-[#FFD700] via-blue-500 to-blue-600 text-white px-6 pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700] via-blue-500 to-blue-600 -z-10" />

        {/* About Text */}
        <motion.div
          className="max-w-3xl mb-12 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed">
            I’m Kenneth Akinyelure, a passionate Full-Stack Developer who goes the extra mile. Energetic, dedicated, and solutions-driven, I turn complex problems into clean, efficient code using React, TypeScript, PHP, and more.
          </p>
        </motion.div>

        {/* Skills Loop */}
        <div className="w-full overflow-hidden mt-10 z-10">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              duration: 10, // Speed up the slide
              ease: 'linear',
            }}
            style={{ width: 'max-content' }}
          >
            {allSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-gray-100 text-blue-800 px-5 py-3 rounded-full shadow-lg border border-blue-300 min-w-max font-semibold"
              >
                {skill.name} — {skill.level}%
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
