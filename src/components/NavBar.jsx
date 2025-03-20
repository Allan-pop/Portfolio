import React from "react";

export default function Navbar() {
  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-black text-violet-500 fixed top-0 left-0 w-full p-4 shadow-lg z-50 rounded-lg mt-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="hover:text-gray-400 text-2xl font-bold">
         MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-400 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-gray-400 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-gray-400 cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-gray-400 cursor-pointer">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-gray-400 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
