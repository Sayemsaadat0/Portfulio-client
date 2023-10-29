import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <div  className=" bg-white  shadow-md rounded-lg  col-span-2  row-span-2 duration-700 hover:shadow-lg border hover:scale-105 ">
            <div className="w-full p-2 ">
                <p>Contact</p>
                <div className="w-full h-[0.4px]  bg-neutral-400/60 mt-1 top-7  " />

                <div className='mt-2'>
                   <ContactUs></ContactUs>
                </div>
            </div>
        </div>
    );
};

export default Contact;