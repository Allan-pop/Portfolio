import React from "react"; 
import { motion } from "framer-motion";
import NavBar from "./navBar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Contact", path: "#contact" },
    { title: "Sign Up", path: "/signup" },
  ];

  const projects = [
    {
      title: "Car Rental Management",
      description:
        "A web-based system for managing vehicle rentals, tracking reservations, and handling customer interactions.",
      image: "/images/carrental.jpg",
      link: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "A complete system for managing patient records, appointments, and staff coordination in hospitals.",
      image: "/images/hospitalmng.jpg",
      link: "#",
    },
    {
      title: "Calculator App",
      description:
        "A simple and interactive calculator built with React for performing basic arithmetic operations.",
      image: "/images/calculator.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <NavBar links={navLinks} />

      {/* Home Section */}
      <motion.section
        id="home"
        className="mt-16 flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Section - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-violet-500">
            Hello, I am Allan Kigen
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A passionate Software Developer currently learning{" "}
            <span className="text-gray-300">React</span> and exploring frontend
            development. I focus on building interactive, user-friendly, and
            responsive web applications using modern technologies.
          </p>
        <div className="mt-6 flex space-x-6">
          <a href="https://github.com/Allan-pop" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
          <FaGithub />
          </a>
          <a href="https://linkedin.com/in/allan-kigen-777g" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
          <FaLinkedin />
          </a>
          <a href="https://twitter.com/@allankybz" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
          <FaTwitter />
          </a>
       </div>
          <a href="#projects">
            <motion.button
              className="mt-6 px-6 py-3 bg-violet-600 text-gray-300 rounded-lg shadow-lg hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View My Work
            </motion.button>
          </a>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/profile.jpeg"
            alt="Allan Kigen"
            className="w-64 h-64 md:w-96 md:h-96 object-cover object-center rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center justify-center p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl text-center bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-10 border border-white/30">
          <h2 className="text-5xl font-extrabold text-violet-400">About Me</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            I'm <span className="font-semibold text-violet-300">Allan Kigen</span>,
            a passionate frontend developer focused on crafting modern, responsive,
            and user-friendly web applications.
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            I specialize in <strong>React and Tailwind CSS</strong>, building sleek
            interfaces that offer smooth user experiences. Currently, I'm expanding
            my skills in <strong>full-stack development</strong>.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-violet-400">Projects</h2>
        <p className="mt-4 text-gray-300 text-lg text-center">
          Here are some of my latest projects showcasing my expertise in React and
          frontend development.
        </p>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:opacity-50"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm text-center px-4">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      {/* Skills Section - Tech Stack Showcase */}
<motion.section
  id="skills"
  className="min-h-screen flex flex-col items-center justify-center bg-black p-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-violet-400">Tech Stack</h2>
  <p className="mt-4 text-gray-300 text-lg">
    Here are some of the technologies I use in development:
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
    {[
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "Java", icon: "☕" },
      { name: "PHP", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Git", icon: "🔗" },
      { name: "Firebase", icon: "🔥" },
    ].map((tech, index) => (
      <motion.div
        key={index}
        className="p-6 bg-gray-800 rounded-xl flex flex-col items-center text-center transition-transform transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-5xl">{tech.icon}</span>
        <p className="mt-2 text-gray-300 text-lg font-semibold">{tech.name}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-black p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 bg-white/10 backdrop  p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-violet-500 mb-6">Get In Touch</h2>
    <form action="mailto:kigenallan1@gmail.com" method="POST">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-3 border rounded-md focus:ring w-full" required />
        <input type="text" placeholder="Last Name" className="p-3 border rounded-md focus:ring w-full" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="email" placeholder="Email Address" className="p-3 border rounded-md focus:ring w-full" required />
        <input type="tel" placeholder="Phone No." className="p-3 border rounded-md focus:ring w-full" />
      </div>
      <textarea placeholder="Message" className="p-3 border rounded-md focus:ring w-full mt-4 h-32" required></textarea>
      <button type="submit" className="mt-4 bg-violet-500 text-white py-3 px-6 rounded-md hover:bg-indigo-700">Send</button>
    </form>
  </div>
      </motion.section>
    </div>
  );
}
