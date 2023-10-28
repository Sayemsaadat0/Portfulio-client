import { FaSquareFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
const SocialLinks = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white h-28 shadow-md rounded-lg  col-span-2 ">
            <div className="  p-2 z-20">
                <p className="">Get in touch</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <div className="mb-4 flex justify-between">
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