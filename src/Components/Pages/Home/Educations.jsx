import React from 'react';

const Educations = () => {
    return (
        <div className=" dark:bg-[#1E1E1E] bg-white   shadow-md rounded-lg   col-span-2  relative ">
            <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">Educations</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1   " />
            </div>

            <div className="py-4 px-2">
                <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
                    <div className="flex justify-between items-center p-2  gap-x-2 mt-8 ">
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

                <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
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
        </div>
    );
};

export default Educations;