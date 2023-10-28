import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Projects = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg col-span-2 row-span-3   overflow-hidden  ">
            <div className="  w-full p-2 z-20">
                <p className="">Projects</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='card px-2'>
                        <img className='rounded-lg' src="https://i.pinimg.com/564x/ab/36/40/ab36409c1701081ee1838556eee67e79.jpg" alt="" />
                        <div className='card-body  px-0'>
                            <p className='card-title text-sm'>Title : Tripsure</p>
                            <p className='text-sm'>Online Tourist Management Portals</p>
                            <p className='text-sm'>Online Tourist Management Portals Online Tourist Management Portals Online Tourist Management Portals</p>
                            <p className='text-sm'>Online Tourist Management Portals Online Tourist Management Portals Online Tourist Management Portals</p>
                            

                            <div className='flex justify-between'>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Live Site
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Client Side
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Server Side
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-2'>
                        <img className='rounded-lg' src="https://i.pinimg.com/564x/ab/36/40/ab36409c1701081ee1838556eee67e79.jpg" alt="" />
                        <div className='card-body px-0'>
                            <p className='card-title text-sm'>Title : Tripsure</p>
                            <p className='text-sm'>Online Tourist Management Portals</p>
                            <p className='text-sm'>Online Tourist Management Portals Online Tourist Management Portals Online Tourist Management Portals</p>
                            <p className='text-sm'>Online Tourist Management Portals Online Tourist Management Portals Online Tourist Management Portals</p>
                    
                            <div className='flex justify-between'>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Live Site
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Client Side
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                                <div className=' group items-center justify-center '>
                                    <Link to='/' className='text-xs flex w-full  justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>Server Side
                                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;