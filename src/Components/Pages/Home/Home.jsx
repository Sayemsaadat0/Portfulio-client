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
import Certificate from './Certificate';
import Experience from './Experience';
import Locaation from './locaation';

const Home = () => {
    return (
        <div className=" w-full pb-6  px-4  max-w-6xl mx-auto">
            <Hero></Hero>
            <div className="grid pt-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
                <Banner></Banner>
                <Mode></Mode>
                <About></About>
                <Experience></Experience>
                <Certificate></Certificate>
                <Educations></Educations>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <SocialLinks></SocialLinks>
                <Locaation></Locaation>
            </div>
        </div>
    );
};

export default Home;