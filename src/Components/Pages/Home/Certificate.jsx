import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion"
const Certificate = () => {
    return (
        <motion.div  drag
        dragConstraints={{left: 0, top: 0, right:0 , bottom: 0}} className=" bg-white  shadow-md rounded-lg  h-44 duration-700 hover:shadow-lg border hover:scale-105">
            <div className=" w-full p-2 ">
                <p >Certifications</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className='md:py-4 px-2 flex justify-center items-center flex-col'>
                <div>
                    <p className='text-sm textj text-center'>"Complete Web Development Course"  <br />- Programming Hero</p>

                    <div className='group items-center justify-center '>
                        <a className='text-xs flex  justify-center items-center gap-1 hover:bg-black hover:text-white duration-700 mt-3 rounded-full py-2 px-3 border dark:bg-neutral-700/40 ' download={true} href="/certificate.pdf">Certificate
                            <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                        </a>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Certificate;