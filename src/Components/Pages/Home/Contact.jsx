import React from 'react';
import ContactUs from '../ContactUs/ContactUs';

const Contact = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white   shadow-md rounded-lg  col-span-2  row-span-2 ">
            <div className="w-full p-2 z-10">
                <p>Contact</p>
                <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />

                <div className='mt-2'>
                   <ContactUs></ContactUs>
                </div>
            </div>
        </div>
    );
};

export default Contact;