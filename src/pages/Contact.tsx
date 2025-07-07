import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper>
      <section className="min-h-screen bg-gradient-to-b from-white via-[#FFD700] to-blue-600 px-6 py-16 text-white flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold leading-tight text-black">Let’s Connect</h2>
          <p className="text-lg max-w-sm text-black">
            Whether it's collaboration, hiring, or just saying hi , I'm always open to great conversations.
          </p>

          <div className="space-y-4 text-lg">
            <a
              href="mailto:kennethakinyelure@gmail.com"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              📧 <span className="text-black">Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kennethakin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              💼 <span className="text-black">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/KennethAkin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              🧑‍💻 <span className="text-black">GitHub Portfolio</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-black"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Thank you! 🎉</h3>
              <p>Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <form
              action="https://formspree.io/f/xanjvadk"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">
                   Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
