import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Buttons from '../Shared/Buttons';

const Blogs = () => {
    return (
        <div className="rounded-lg col-span-2 row-span-3 ">
            <div
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={1}
                className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg h-44 overflow-y-auto  p-2  "  >
                <div className="w-full p-2 z-20">
                    <p>Blogs</p>
                    <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
                </div>
                <div className="w-full  px-2">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper" >
                        <SwiperSlide className='absoulte'>
                            <div>
                            <h1 className='font-bold py-2'>This is a blog shection ?</h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, excepturi eveniet earum qui perferendis aperiam architecto provident maiores necessitatibus dolore quasi, id accusamus! Rerum facilis eum neque atque esse! Veritatis blanditiis dolores tempora autem nisi quos, voluptatem dignissimos sequi accusantium.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Blogs;