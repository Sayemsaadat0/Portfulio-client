import {useState } from "react";
import { Link } from "react-router-dom";
// import resumeUrl from "../../../../../src/assets/resumeOfSayemSaadat.pdf"

const Navbar = () => {

    const handleDownload = () =>{
        const url = 'https://firebasestorage.googleapis.com/v0/b/portfulio-of-sayem.appspot.com/o/Abu%20Saadat%20Md.%20Sayem%20resume.pdf?alt=media&token=d1958cf8-2b09-4e83-8439-910d7f91291c' 
        const anchor = document.createElement("a")
        anchor.href = url 
        anchor.download = 'Abu Saadat Md. Sayem resume.pdf'
        anchor.click()
    }

    const [navbar, setNavbar] = useState(false);
    const navOptions = <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
        <Link to='/'
            className="s_button">Home</Link>

        <Link to='/aboutme'
            className="s_button">About Me</Link>

        <Link to='/projects'
            className="s_button">Projects</Link>

        <button className="s_button" onClick={handleDownload}>
            Download Resume
        </button>

    </div>


    return (
        <nav className="max-w-[1440px] mx-auto mt-2">
            <div className="justify-between px-4 mx-auto  md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">

                        <Link to='/'> <img className="hover:scale-125 duration-500" width={60} src="https://i.ibb.co/tc9PN8j/Untitled-design-4.png" alt="" /></Link>

                        <div className="md:hidden">
                            <button
                                className=" text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>)}
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