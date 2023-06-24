import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navOptions = <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 ">
      <Link  to='/'
      className="hover:underline hover:scale-105 
      duration-300 hover:font-semi-bold 
      p-2 bg-black text-white hover:bg-white
     hover:text-black">Home</Link>

      <Link  to='/aboutme'
      className="hover:underline hover:scale-105 
      duration-300 hover:font-semi-bold 
      p-2 bg-black text-white hover:bg-white
     hover:text-black">About Me</Link>
    
      <Link className="hover:underline hover:scale-105 duration-300 hover:font-semi-bold p-2
      bg-black text-white hover:bg-white  hover:text-black">Projects</Link>
    
      <Link className="hover:underline hover:scale-105 duration-300 hover:font-semi-bold  p-2
      bg-black text-white hover:bg-white  hover:text-black">Testimonials</Link>
    </div>


    return (
        <nav className="max-w-[2520px] mx-auto mt-2">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                     
                     <Link to='/'> <img className="hover:scale-125 duration-500"  width={100}  src="https://i.ibb.co/ZNtHD6C/logo.png" alt="" /></Link>
                   
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg> )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`} >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;