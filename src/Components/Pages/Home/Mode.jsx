import { motion } from "framer-motion"
const Mode = () => {
    return (
        <motion.div   drag
        dragConstraints={{left: 0, top: 0, right:0 , bottom: 0}}
        className=" bg-white duration-700 hover:shadow-lg border hover:scale-105 rounded-lg h-44">
            <div className=" w-full p-2">
                <div className="flex justify-between items-center ">
                    <p >Mode</p>
                    <div>
                        <span>
                            <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                                <span
                                    className={`flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping bg-green-500`}></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-full h-[0.9px]  bg-neutral-400/60 mt-1 top-7  " />
                <div className="">
                    <p className="text-xs font-semibold text-justify sm:mt-4 mt-3  ">
                       Let's collaborate and build a future where everyone has the opportunity to reach their full potential.🌟🙌
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Mode;