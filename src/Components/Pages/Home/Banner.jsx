import { motion } from "framer-motion"

const Banner = () => {
    return (
        <motion.div drag className="rounded-lg overflow-hidden">
            <div className="flex justify-between items-center ">
                <img className='object-cover hover:scale-105 shadow-lg rounded-lg h-44 duration-700 ' src="/sayem.png" alt="" />
            </div>
    </motion.div>
    );
};

export default Banner;