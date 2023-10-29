import { motion } from "framer-motion"

const Educations = () => {
    return (
        <motion.div  drag
        dragConstraints={{left: 0, top: 0, right:0 , bottom: 0}} className=" dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg   col-span-2  duration-700 hover:shadow-lg border hover:scale-105 relative ">
            <div className=" w-full p-2 z-20">
                <p >Educations</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1   " />
            </div>

            <div className="py-4 px-2">
                <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md ">
                    <div className="flex justify-between items-center p-2  gap-x-2  ">
                        <div>
                            <p className="text-xs font-bold">Bachelor of Science in Botany (2019 - Present)</p>
                            <p className="text-xs">
                                National University Bangladesh
                            </p>
                        </div>

                        <ul className="menu">
                            <a href="#0"></a>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md   relative">
                    <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                        <div>
                            <p className="text-xs font-bold">Higher Secondary Certificate(Science)</p>
                            <p className="text-xs">
                                Naogaon Govt. College, Naogaon, Bangladesh
                            </p>
                        </div>

                        <ul className="menu">
                            <a href="#0"></a>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Educations;