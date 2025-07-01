const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-10 pb-6 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-300 dark:border-gray-700 pt-6">
        {/* Left: Logo or Name */}
        <div className="text-lg font-bold text-center md:text-left">
          Kenneth Akinyelure
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium flex-wrap justify-center">
          <li>
            <a href="/" className="hover:text-blue-600 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600 transition">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/kennethakin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/KennethAkin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:kennethakinyelure@gmail.com"
            className="hover:text-red-600 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-xs text-center mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Kenneth Akinyelure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
