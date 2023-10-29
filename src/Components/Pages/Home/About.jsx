import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
            className=" bg-white cursor-pointer relative shadow-md rounded-lg  col-span-2 duration-700 hover:shadow-lg border hover:scale-105" >
            <div className=" absolute w-full p-2">
                <div className="flex justify-between items-center ">
                    <p >About</p>
                    <p className=" text-sm">Abu Saadat Md. Sayem</p>
                </div>
                <div className="w-full h-[0.9px]  bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <div className="mt-14 px-3 pb-3">
                <p className="text-xs font-semibold   leading-5 text-justify">
                    Am Abu Saadat Md. Sayem,a Frontend Developer from Naaogaon, Bangladesh. with a strong desire to make a difference in the world through the power of web design, by creating websites that are both beautiful and functional, and that help people achieve their goals.
                </p>
            </div>
        </motion.div>
    );
};

export default About;





