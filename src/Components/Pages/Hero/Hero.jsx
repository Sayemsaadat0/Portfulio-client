import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div id='hero' className='px-2 py-20 md:py-32'>
             <div className='md:flex  items-center  justify-between  text-center md:text-left '>
                <div className='div1 md:w-1/3 relative md:min-h-[520px] md:pt-28 justify-between  flex flex-col'>
                    <div>
                        <h3 className="md:text-3xl font-bold ">Hey there!</h3>
                        <h1 className="md:text-6xl text-4xl  md:mt-4 font-bold ">I am  <span className="text-primary">Sayem.</span></h1>

                        <div className='  flex md:hidden justify-center md:justify-start'>
                            <p className="text-primary flex gap-2 justify-center font-bold items-center ">
                                <span className='text-black'>A</span>
                                <Typewriter
                                    options={{
                                        strings: ["MERN Stack", "Front-End", "Full Stack", "React"],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                                <span className='text-black'>Developer</span>
                            </p>
                        </div>

                        <div className='flex gap-6 mt-4 sm:mt-6  justify-center md:justify-start '>
                            <button className='btn btn-outline rounded-full'>Know More</button>
                            <button className='btn btn-neutral rounded-full hover:bg-primary border-none'>Hire me</button>
                        </div>
                    </div>


                    <div className='hidden lg:block absolute bottom-0'>
                        <span className='text-sm'>Born in</span><br />
                        <span className='text-xl'>Bangladesh</span>  <br />
                        <span className='text-sm'>Date of Birth</span> <br />
                        <span className='text-xl'>April 26th, 1999</span>
                    </div>
                </div>
                <div className='div2  text-left  relative md:w-1/3'>
                    {/* countup for small devices */}
                    <div className='absolute md:hidden left-10 top-10'>
                        <div>
                            <p className='text-3xl font-bold'>30+</p>
                            <p>Projects</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold'>30+</p>
                            <p>Projects</p>
                        </div>

                    </div>
                    <img className=''  src="https://i.ibb.co/mcXRKcQ/Untitled-design-7.png" alt="" />
                </div>
                <div className='div3 md:w-1/3 min-h-[550px] relative hidden md:flex items-center '>
                    {/* countup for middium device top right */}
                    <div className='absolute  right-3  top-0'>
                        <div>
                            <p className='text-6xl font-bold'>30+</p>
                            <p>Projects</p>
                        </div>
                        <div>
                            <p className='text-6xl font-bold'>30+</p>
                            <p>Projects</p>
                        </div>

                    </div>
                    <div className='pt-36'>
                        <h1 className="md:text-5xl px-4 text-4xl  font-bold ">
                            <span className="text-primary flex gap-2 justify-center items-center md:gap-6">
                                <span className='text-black '>A</span>
                                <Typewriter
                                    options={{
                                        strings: ["MERN Stack", "Front-End", "Full Stack", "React"],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                            </span>
                            Developer
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;