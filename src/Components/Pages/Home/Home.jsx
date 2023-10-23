/*  import Typewriter from 'typewriter-effect';
const Home = () => {
    const string = [
        "MERN Stack",
        "Front-End",
        "Full Stack",
        "React"
    ] 
    return (
        <section>
            <div>
                <div className="min-h-screen heroBg relative flex items-center px-2">
           
                    <div className="md:absolute  top-6 md:top-52 ">
                        <h3 className="md:text-4xl font-bold ">Hey there!</h3>
                        <h1 className="md:text-7xl md:mt-4  font-bold text-2xl">I am  <span className="text-primary">Sayem</span></h1>
                        <div className='md:flex gap-6 mt-6  '>
                            <button className='md:text-xl text-sm px-4 py-2 bg-white text-black border border-black rounded-full text-center flex justify-center items-center '>Know More</button>
                            <button className='md:text-xl text-sm px-4 py-2 bg-black text-white  rounded-full text-center flex justify-center items-center hover:bg-primary  '>Hire me</button>
                        </div>
                    </div>

               
                    <div className="md:absolute  top-24  text-center  md:top-[400px] right-2 md:right-0 ">
                        <h1 className="md:text-7xl font-bold text-xl ">
                            <span className="text-primary flex gap-2 md:gap-6">
                                <span className='text-black'>A</span>
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
        </section>
    );
};

export default Home; */


import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <section className='px-2 '>
            <div className='md:flex  justify-between  text-center md:text-left '>
                <div className='div1 md:w-1/3 md:pt-28 '>
                    <h3 className="md:text-3xl font-bold ">Hey there!</h3>
                    <h1 className="md:text-7xl text-4xl  md:mt-4 font-bold ">I am  <span className="text-primary">Sayem.</span></h1>
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
                <div className='div2  md:w-1/3'>
                    <img src="https://i.ibb.co/mcXRKcQ/Untitled-design-7.png" alt="" />
                </div>
                <div className='div3 md:w-1/3  pt-36 hidden md:flex items-center '>
                    <h1 className="md:text-6xl text-4xl  font-bold ">
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
        </section>
    );
};

export default Home;