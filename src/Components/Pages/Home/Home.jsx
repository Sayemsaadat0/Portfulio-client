/* import { BsArrowRight } from "react-icons/bs";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-4 py-10">
                <div className="w-44 rounded-xl shadow-lg overflow-hidden">
                    <img className="duration-700  hover:scale-105" src="/sayem.png" alt="" />
                </div>

                <div className=" rounded-xl bg-white shadow-lg md:border p-4">
                    <p className="text-gray-500 border-b-2 ">
                        mode
                    </p>
                    <p className="">
                        Open for Design Business or any jobs.
                    </p>
                    <div className='flex gap-1 group items-center underline'>
                        <a download={true} href="/resume.pdf">Get In Touch</a>
                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                    </div>
                </div>


                <div className="rounded-xl bg-white shadow-lg text-justify p-2  border col-span-2 ">
                <p className="text-gray-500 border-b-2 ">
                        About
                    </p>
                    <p className="py-6">
                        I am Abu Saadat Md. Sayem, a Frontend Developer. I am passionate about building user-friendly and visually apeallig web experiences. 
                        I Have a strong foundamental in HTML, Css, Javascript, and I am proficient in using frontend framework like React js and Next js.
                    </p>
                </div>










                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div4</div>
                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div5</div>
                <div className="w-36 h-36 border border-black col-span-2">div6</div>
                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div7</div>
                <div className="w-36 h-36 border border-black col-span-2">div8</div>
                <div className="w-36 h-36 border border-black">div9</div>
                <div className="w-36 h-36 border border-black">div10</div>
                <div className="w-36 h-36 border border-black">div11</div>
                <div className="w-36 h-36 border border-black">div12</div>

            </div>
        </div>
    );
};

export default Home; */












import React from 'react';
import Hero from '../Hero/Hero';
import Mode from './Mode';
import About from './About';
import Educations from './Educations';
import Projects from './Projects';
import SocialLinks from './SocialLinks';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=" w-full  px-4  max-w-6xl mx-auto">
            <Hero></Hero>
            <div className="grid pt-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
                <div className="z-20 overflow-hidden relative shadow-md rounded-lg sm:h-40">
                    <div className=" w-full  ">
                        <div className="flex justify-between items-center image">
                            {/* <img className='object-fill hover:scale-110 duration-700' src="/sayem.png" alt="" /> */}
                        </div>
                        <div className="w-full h-[0.9px]      " />
                    </div>
                </div>
              <Mode></Mode>
              <About></About>
              <Educations></Educations>
              <Projects></Projects>
             <SocialLinks></SocialLinks>
                <div className="dark:bg-[#1E1E1E] bg-white  overflow-hidden relative shadow-md rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
                    <div className=" absolute w-full p-2 z-10">
                        <div className="flex justify-between items-center ">
                            <p className="text-xs">Latest Work</p>
                            <p className="text-neutral-500 text-xs ">Waitlist</p>
                        </div>
                        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                    </div>


                </div>
             <Skills></Skills>
                <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg z-20 h-44 relative">
                    <div className=" absolute w-full p-2 z-20">
                        <p className="text-xs">Newsletter</p>
                        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                    </div>

                    <div className="mt-24 flex flex-col items-center w-full px-2 ">
                        <input
                            className=" w-full rounded-full text-sm p-1 placeholder:text-neutral-700 outline-none  pl-6 bg-neutral-900"
                            type="email"
                            placeholder="name@email.com"
                        />
                        <button className="text-xs  w-full    mt-2 rounded-full p-1 px-2 dark:bg-neutral-700/40">
                            <span>Contact me</span>
                        </button>
                    </div>
                </div>
                <div
                    className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg h-44 p-2"
                >
                    <div>
                        <p className="text-[10px] mt-8">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                            optio vel officia.
                        </p>

                        <div className="flex items-center gap-x-2 mt-7">


                            <div className="">
                                <p className="text-xs">JoScript</p>
                                <p className="text-xs">Founder, Joscript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
                    <div
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={1}
                        className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg  h-44 p-2 relative "
                    >
                        <div className=" absolute w-full p-2 z-20">
                            <p className="text-xs">Years of Experience</p>
                            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                        </div>
                        <div className="mt-10  w-full flex justify-center items-center">
                            <h1 className="text-8xl">17</h1>
                        </div>
                    </div>
                    <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg h-44 p-2 relative z-40">
                        <div>
                            <div className=" absolute w-full p-2 z-20">
                                <p className="text-xs">CV</p>
                                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                            </div>
                        </div>
                        <div className="mt-24 w-full">
                            <button className="text-xs flex w-full items-center justify-between    rounded-full p-1 px-2 dark:bg-neutral-700/40">
                                <span>View</span>

                            </button>
                            <button className="text-xs flex w-full mt-3 items-center justify-between    rounded-full p-1 px-2 dark:bg-neutral-700/40">
                                <span>Download</span>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;