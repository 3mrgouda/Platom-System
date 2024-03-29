import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const NavLinks = [
    { id: 1, link: "#", item: "Home" },
    { id: 2, link: "#", item: "Contact" },
    { id: 3, link: "#", item: "About" },
]

function Navbar() {
    return (
        <div data-aos='fade-down'>
            <div className="container lg:w-[80%] mx-auto lg:my-4 flex justify-between items-center">
                <div className="logo  lg:text-3xl font-mono uppercase ">
                    <Link className='border-solid rounded-md border-purple-500 border-4 py-1 px-4' to="/">Platom System</Link>
                </div>


                <div className="navLinks lg:w-[50%] ">
                    <ul className='flex lg:justify-around lg:w-full'>
                        {
                            NavLinks.map(({ id, link, item }) => {
                                return (
                                    <li key={id}><a href={link}>{item}</a></li>

                                )
                            })
                        }
                    </ul>
                </div>


                <div className="icons flex justify-around text-xl lg:w-[8%]">
                    <Link to="https://www.linkedin.com/in/3mrgouda" target='_blank'><FaLinkedin/></Link>
                    <Link to="https://github.com/3mrgouda/Platom-System" target='_blank'><FaGithub/></Link>
                  
                </div>


            </div>
        </div>
    )
}

export default Navbar