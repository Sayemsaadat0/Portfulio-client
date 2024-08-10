import CountUp from 'react-countup';
import { motion } from "framer-motion"
const Experience = () => {
    return (
        <div   className=" bg-white  shadow-md rounded-lg h-44 duration-700 hover:shadow-lg border hover:scale-105">
            <div className=" w-full p-2 ">
                <p >Project Completed</p>
                <div className="w-full h-[0.9px]  bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className='py-4 px-2 flex justify-center items-center flex-col'>
                <p className='text-sm'>Project Completed</p>
                <p className='font-bold text-7xl'><CountUp start={2} duration={1} end={10} />+</p>
            </div>

        </div>
    );
};

export default Experience;