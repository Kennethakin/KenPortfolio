import PageWrapper from "../components/PageWrapper";
import ProfilePic from "../assets/ProfilePic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <PageWrapper>
      <section className="bg-gradient-to-b from-white via-[#FFD700] to-[#FFD700] flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16">
        {/* Profile Image */}
        <motion.img
          src={ProfilePic}
          alt="Kenneth Akinyelure"
          className="w-36 h-36 rounded-full shadow-lg mb-4 object-cover border-4 border-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Name & Tagline */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Kenneth Akinyelure
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full-Stack Developer who goes the extra mile. Energetic, dedicated, and solutions-driven. I turn complex problems into clean, efficient code.
        </motion.p>

        {/* Highlighted Line */}
        <motion.p
          className="text-md md:text-lg font-semibold text-blue-700 bg-white px-4 py-2 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build scalable, modern websites and apps with clean code and creativity.
        </motion.p>

        {/* Call-to-Actions */}
        <div className="flex gap-4 flex-wrap justify-center mb-10">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
          <Link
            to="/projects"
            className="bg-white text-blue-700 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition"
          >
            View Projects
          </Link>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {['React', 'TypeScript', 'PHP', 'HTML', 'CSS', 'JavaScript'].map((tech, index) => (
            <span
              key={index}
              className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-full shadow-md border border-blue-200 text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Home;
