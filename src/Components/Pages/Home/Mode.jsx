import React from 'react';

const Mode = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white  shadow-md relative rounded-lg sm:h-40  ">
            <div className=" absolute w-full p-2">
                <div className="flex justify-between items-center ">
                    <p className="text-xs">Mode</p>
                    <div>
                        <span>
                            <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                                <span
                                    className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-green-500`}></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                <div className="">
                    <p className="text-xs font-semibold  sm:mt-4 mt-3  ">
                        Ready for design projects. Let's connect and create! 🌆
                    </p>

                    <button className="text-xs flex w-full items-center justify-between   mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 sm:w-full">
                        <span>Contact me</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mode;