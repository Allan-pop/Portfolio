import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-10">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-10 text-gray-300">
        <h2 className="text-4xl font-extrabold text-blue-400 text-center mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hey there! I'm <span className="font-semibold text-blue-300">Allan Kigen</span>, a passionate frontend developer with a deep interest in building **modern, responsive, and intuitive web applications**.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          My journey in tech started with a Bachelor’s in Business Information Technology, giving me the ability to blend technology with business needs. Currently, I'm focused on mastering React, Tailwind CSS, and UI/UX principles to craft seamless digital experiences.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I'm also exploring backend technologies to transition into **full-stack development**. Beyond coding, I love discovering new tech trends, contributing to open-source projects, and collaborating with like-minded developers.
        </p>
      </div>
    </div>
  );
}
