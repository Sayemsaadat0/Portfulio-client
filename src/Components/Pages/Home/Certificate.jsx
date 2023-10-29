import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Certificate = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg z-20 h-44 ">
            <div className=" w-full p-2 z-20">
                <p >Certifications</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className='md:py-4 px-2 flex justify-center items-center flex-col'>
                <div>
                    <p className='text-sm textj text-center'>"Complete Web Development Course"  <br />- Programming Hero</p>

                    <div className='group items-center justify-center '>
                        <a className='text-xs flex  justify-center items-center gap-1 hover:bg-black hover:text-white duration-700 mt-3 rounded-full py-2 px-3 border dark:bg-neutral-700/40 ' download={true} href="/certificate.pdf">Certificate
                            <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Certificate;