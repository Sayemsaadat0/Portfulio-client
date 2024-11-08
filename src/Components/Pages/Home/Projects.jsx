import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Buttons from '../Shared/Buttons';
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className=" bg-white  shadow-md rounded-lg col-span-2 row-span-2 overflow-hidden  duration-700 hover:shadow-lg border hover:scale-105">
            <div className="  w-full p-2 ">
                <p className="">Projects</p>
                <div className="w-full h-[0.9px]  bg-neutral-400/60 mt-1 top-7  " />
            </div>

            <Swiper
                pagination={{ dynamicBullets: true, }}
                modules={[Pagination]}
                className="mySwiper" >
                <SwiperSlide >
                    <Link to={'https://tripsure-client.web.app/'} className='px-2'>
                        <div className='imageDiv '>
                        </div>
                        <div className='overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin h-[200px] px-2'>
                            <div className='py-2'>
                                <p className='font-bold'>Title : Tripsures</p>
                                <p className='text-sm'>Project Type : Online Tourist Management Portals</p>
                            </div>
                            <p className='text-sm text-justify'>Plan your perfect trip with our travel website. Explore destinations, book adventures, and turn your travel dreams into reality</p>
                            <p className='text-sm text-justify py-4'>Tools : React, Node, Mongodb, Firebase, Tailwind, Ant Design, Daisy ui, Redux toolkit, Stripe.</p>
                            <p className='text-sm text-justify list-disc'>
                                Features :
                                <li>Easily search for destinations, select travel dates, and choose the number of people in your group to plan your adventure.</li>
                                <li>Enjoy features like weather information, secure authentication, a customizable AI chatbot , a messenger chat box, places by category and top visited destinations. </li>
                                <li>Safely book packages and offers with SSL Commerce and Stripe payment integration, while admins have full control through a dedicated dashboard.</li>
                            </p>

                            <div className='flex justify-between'>
                                <Buttons to={'https://tripsure-client.web.app/'} text={'Live Site'}></Buttons>
                                <Buttons to={'https://github.com/Sayemsaadat0/tripsure-client'} text={'Client Site'}></Buttons>
                                <Buttons to={'https://github.com/Sayemsaadat0/tripsure-server'} text={'Server Site'}></Buttons>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link to={'https://saas.bamsbd.com/'} className='px-2'>
                        <div className='accounts'>
                        </div>
                        <div className='overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin h-[200px] px-2'>
                            <div className='py-2'>
                                <p className='text-sm'>Accounts Management Solution</p>
                            </div>
                            <p className='text-sm text-justify py-4'>Tools : React, Node, Mysql,  Tailwind, shadcn</p>
                            <p>Credential : </p>
                            <p>Email : sayem@gmail.com</p>
                            <p>Password : 12345</p>
                            <p className='text-sm text-justify list-disc'>
                                Features :
                                <li> Easily record and track all your business expenses and income.</li>
                                <li>Keep track of product stock, manage purchases from suppliers, and record sales.
                                </li>
                                <li>Create detailed reports on expenses, income, sales, and inventory, filter the data, and download reports in Excel
                                    and PDF.</li>
                            </p>
                            <div className='flex justify-between'>
                                <Buttons to={'https://saas.bamsbd.com/'} text={'Live Site'}></Buttons>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link to={'https://inventory-client-rosy.vercel.app/'} className='px-2'>
                        <div className='inventory'>
                        </div>
                        <div className='overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin h-[200px] px-2'>
                            <div className='py-2'>
                                <p className='text-sm'>Inventory Management Solution</p>
                            </div>
                            <p className='text-sm text-justify py-4'>Tools :Typescript, React, Node, Mysql,  Tailwind, shadcn</p>
                            <p>Credential : </p>
                            <p>Email : admin@gmail.com</p>
                            <p>Password : 123456</p>
                            <p className='text-sm text-justify list-disc'>
                                Features :
                                <li> Easily record and track all your Products.</li>
                                <li>Keep track of product stock, manage purchases from suppliers, and record Chalan.
                                </li>
                            </p>
                            <div className='flex justify-between'>
                                <Buttons to={'https://inventory-client-rosy.vercel.app/'} text={'Live Site'}></Buttons>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Projects;