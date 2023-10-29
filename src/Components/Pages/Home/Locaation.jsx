import { motion } from "framer-motion"
const Location = () => {
    return (
        <div className="rounded-lg md:col-span-4 col-span-2  row-span-4 px-2">
            <div
                className="dark:bg-[#1E1E1E]  bg-white shadow-md rounded-lg h-44 w-80 md:w-full overflow-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin">
                <div className="w-full flex justify-center items-center border ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3030209670933!2d88.93724451102318!3d24.819308877864202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc7dcdc1138767%3A0x96cd98b659f2e035!2sUkilpara!5e0!3m2!1sen!2sbd!4v1698497347909!5m2!1sen!2sbd"
                        width="700"
                        height="550"
                        style={{ border: "0" }}
                        allowFullScreen="true"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
