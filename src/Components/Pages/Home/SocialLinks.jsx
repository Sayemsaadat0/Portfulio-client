import {  FaWhatsapp, FaLocationDot, FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { FaUserCircle } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
const SocialLinks = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg  col-span-2 flex flex-col justify-between ">
            <div className="  p-2 z-20">
                <p className="">Get in touch</p>

                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <div className='my-2 px-2 flex flex-col gap-2'>
                <p className='text-sm flex items-center gap-2 font-bold'><FaUserCircle className='text-xl'></FaUserCircle> Abu Saadat Md. Sayem</p>
                <p className='text-sm flex items-center gap-2 font-bold'><FaLocationDot className='text-xl'></FaLocationDot> Naogaon, Bangladesh</p>
                <p className='text-sm flex items-center gap-2 font-bold'><FaWhatsapp className='text-xl'></FaWhatsapp> +8801521574741</p>
                <p className='text-sm flex items-center gap-2 font-bold'><MdEmail className='text-xl'></MdEmail> sayemsaadat0@gmail.com</p>
            </div>

            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />

            <div className="my-4 flex items-center justify-between px-4">
                <div className="flex justify-center gap-x-2 px-2">
                    <a target='blank' href="https://github.com/Sayemsaadat0">
                        <FaGithub className='text-5xl hover:scale-105 duration-500 rounded-full border hover:shadow-2xl shadow border-gray-300 p-1'></FaGithub>
                    </a>
                </div>
                <div className="flex justify-center gap-x-2 px-2">
                    <a target='blank' href="https://www.linkedin.com/in/abusaadatmdsayem/">
                        <FaLinkedinIn className='text-5xl hover:scale-105 duration-500 rounded-full border hover:shadow-2xl shadow border-gray-300 p-1'></FaLinkedinIn>
                    </a>
                </div>
                <div className="flex justify-center gap-x-2 px-2">
                    <a target='blank' href="https://www.facebook.com/Bilatindur">
                        <BsFacebook className='text-5xl hover:scale-105 duration-500 rounded-full border hover:shadow-2xl shadow border-gray-300 p-1'></BsFacebook>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;