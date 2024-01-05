import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className="rounded-lg overflow-hidden">
            {/* image */}
            <div className="flex justify-between items-center mt-2 ">
                <img className='object-cover hover:scale-105 shadow-lg rounded-lg h-40 duration-700 ' src="https://i.ibb.co/n84r1gC/20231213-104046f-1-2.jpg" alt="" />
                {/* <img className='object-cover hover:scale-105 shadow-lg rounded-lg h-44 duration-700 ' src="/sayem.png" alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;