import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavLinks = [
  { id: 1, link: "/", item: "Home" },
  { id: 2, link: "/contact", item: "Contact" },
  { id: 3, link: "/about", item: "About" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-0">
        <div className="logo mb-4 lg:mb-0">
          <Link
            className="border-solid rounded-md border-purple-500 border-4 py-1 px-4 text-xl font-bold"
            to="/"
          >
            Platom System
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {!isMenuOpen ? (
              <IoMenu className="text-3xl" />
            ) : (
              <IoClose className="text-3xl" />
            )}
          </button>
        </div>

        <div
          className={`linksForLarge hidden lg:flex-row items-center gap-4 lg:gap-8 lg:flex`}
        >
          <ul className="navLinks lg:flex flex-row gap-4 lg:gap-8">
            {NavLinks.map(({ id, link, item }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="text-lg hover:text-purple-500 transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="icons flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/3mrgouda"
              target="_blank"
              className="hover:text-purple-500 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/3mrgouda/Platom-System"
              target="_blank"
              className="hover:text-purple-500 transition duration-200"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`LinksForSmall lg:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } justify-center items-center gap-4 lg:gap-8`}
      >
        <ul className="navLinks flex gap-4 lg:gap-8">
          {NavLinks.map(({ id, link, item }) => (
            <li key={id}>
              <Link
                to={link}
                className="text-lg hover:text-purple-500 transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icons flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/3mrgouda"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/3mrgouda/Platom-System"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
