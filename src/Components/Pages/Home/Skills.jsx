import Marquee from "react-fast-marquee";
import html from '/1.png'
import css from '/2.png'
import bootstrap from '/3.png'
import tailwind from '/4.png'
import next from '/5.png'
import mongodb from '/6.png'
import react from '/7.png'
import javascript from '/8.png'
import firebase from '/9.png'
import express from '/10.png'
import node from '/11.png'
import github from '/12.png'
import { motion } from "framer-motion"


const Skills = () => {
    return (
        <motion.div drag className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg col-span-2 duration-700 hover:shadow-lg border hover:scale-105">
            <div className="p-2">
                <p className="">Skills</p>
                <div className=" h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <div className="px-2">
                <Marquee className="py-1">
                     <img className="w-1/2 border rounded-full p-2" src={html} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={css} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={bootstrap} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={tailwind} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={javascript} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={react} alt="" /> 


                </Marquee>
                <Marquee className="py-2 " direction="right">
                    <img className="w-1/2 border rounded-full p-2" src={next} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={node} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={express} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={mongodb} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={firebase} alt="" />
                    <img className="w-1/2 border rounded-full p-2" src={github} alt="" />
                </Marquee>
            </div>



        </motion.div>
    );
};

export default Skills;