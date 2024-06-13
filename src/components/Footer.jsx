import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center text-xs sm:text-sm py-6">
      <p className="text-gray-700 mb-2">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://www.linkedin.com/in/3mrgouda"
          target="_blank"
          rel="noopener noreferrer"
        >
          @3mrgouda
        </a>
      </p>
      <div className="icons flex gap-4 text-2xl mt-2">
        <a
          href="https://www.linkedin.com/in/3mrgouda"
          target="_blank"
          className="hover:text-purple-500 transition duration-200"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/3mrgouda/Platom-System"
          target="_blank"
          className="hover:text-purple-500 transition duration-200"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
