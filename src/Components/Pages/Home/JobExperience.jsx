import React from 'react'

const JobExperience = () => {
    return (
        <div className=" bg-white  shadow-md rounded-lg  col-span-2  row-span-2 duration-700 hover:shadow-lg border hover:scale-105 ">
            <div className="w-full p-2 ">
                <p>Job Experience</p>
                <div className="w-full h-[0.4px]  bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="p-2 space-y-2">
                <div className="bg-[#F5F5F5]   rounded-md ">
                    <div className="flex justify-between items-center p-2  gap-x-2  ">
                        <div>
                            <p className="font-bold">
                                Intern Developer <span className='text-xs font-normal'>(Nov 2023 - Feb 2024)</span>
                            </p>
                            <p>The Yolo Studio, <span className='text-xs'>On-site</span></p>
                            <p className='text-xs'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5]   rounded-md   relative">
                    <div className="flex justify-between items-center p-2  gap-x-2  ">
                        <div>
                            <p className="font-bold">
                                Junior Frontend Developer <br />
                            </p>
                            <p>BAITS, <span className='text-xs'>On-site</span></p>
                            <span className='text-xs font-normal'>(March 2024 - Present) , Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobExperience