import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const NavLinks = [
    { id: 1, link: "#", item: "members" },
    { id: 2, link: "#", item: "members" },
    { id: 3, link: "#", item: "members" },
]

function Navbar() {
    return (
        <div>
            <div className="container lg:w-[80%] mx-auto lg:my-4 flex justify-between items-center">
                <div className="logo  lg:text-3xl font-mono uppercase ">
                    <Link className='border-solid border-purple-500 border-4 py-1 px-4' to="/">Platom System</Link>
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
                    <Link to=""><FaLinkedin/></Link>
                    <a href="#"><FaGithub/></a>
                    
                </div>


            </div>
        </div>
    )
}

export default Navbar