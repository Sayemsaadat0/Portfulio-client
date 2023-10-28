import { FaSquareFacebook,FaSquareWhatsapp,FaLocationDot, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { FaUserCircle } from 'react-icons/fa'
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
                <p className='text-sm flex items-center gap-2 font-bold'><FaSquareWhatsapp className='text-xl'></FaSquareWhatsapp> +8801521574741</p>
                <p className='text-sm flex items-center gap-2 font-bold'><MdEmail className='text-xl'></MdEmail> sayemsaadat0@gmail.com</p>
            </div>

            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />

            <div className="my-4 flex items-center justify-between">
                <div className="flex justify-center gap-x-2 px-2">
                    <FaSquareFacebook className='text-5xl'></FaSquareFacebook>
                </div>
                <div className="flex justify-center gap-x-2 px-2">
                    <FaLinkedin className='text-5xl'></FaLinkedin>
                </div>
                <div className="flex justify-center gap-x-2 px-2">
                    <FaGithub className='text-5xl'></FaGithub>
                </div>
                <div className="flex justify-center gap-x-2 px-2">
                    <MdEmail className='text-5xl'></MdEmail>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;