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
          <h2 className="text-4xl font-extrabold leading-tight">Let’s Connect</h2>
          <p className="text-lg max-w-sm">
            Whether it's collaboration, hiring, or just saying hi — I'm always open to great conversations.
          </p>

          <div className="space-y-4 text-lg">
            <a
              href="mailto:kennethakinyelure@gmail.com"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              📧 <span>Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kennethakin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              💼 <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/KennethAkin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:underline justify-center md:justify-start"
            >
              🧑‍💻 <span>GitHub Portfolio</span>
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
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none py-2 placeholder-transparent"
                  placeholder="Name"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none py-2 placeholder-transparent"
                  placeholder="Email"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none py-2 placeholder-transparent"
                  placeholder="Your Message"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  Message
                </label>
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
