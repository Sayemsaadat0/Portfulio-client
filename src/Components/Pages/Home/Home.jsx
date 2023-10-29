
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