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
import Contact from './Contact';
import Banner from './Banner';
import Countup from './Countup';
import Certificate from './Certificate';
import Blogs from './Blogs';
import Noname from './Noname';

const Home = () => {
    return (
        <div className=" w-full  px-4  max-w-6xl mx-auto">
            <Hero></Hero>
            <div className="grid pt-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
                <Banner></Banner>
                <Mode></Mode>
                <About></About>
                <Countup></Countup>
                <Certificate></Certificate>
                <Educations></Educations>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <SocialLinks></SocialLinks>
                <Noname></Noname>
  
            </div>
        </div>
    );
};

export default Home;