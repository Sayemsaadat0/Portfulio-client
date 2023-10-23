import Typewriter from 'typewriter-effect';
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
                    {/* left  large*/}  
                    <div className="md:absolute  top-6 md:top-52 ">
                        <h3 className="md:text-4xl font-bold ">Hey there!</h3>
                        <h1 className="md:text-7xl md:mt-4  font-bold text-2xl">I am  <span className="text-[#9D3535]">Sayem</span></h1>
                        <div className='md:flex gap-6 mt-6  '>
                            <button className='md:text-xl text-sm px-4 py-2 bg-white text-black border border-black rounded-full text-center flex justify-center items-center '>Know More</button>
                            <button className='md:text-xl text-sm px-4 py-2 bg-black text-white  rounded-full text-center flex justify-center items-center hover:bg-[#9D3535]  '>Hire me</button>
                        </div>
                    </div>

                    {/* right */}
                    <div className="md:absolute  top-24  text-center  md:top-[400px] right-2 md:right-0 ">
                        <h1 className="md:text-7xl font-bold text-xl ">
                            <span className="text-[#9D3535] flex gap-2 md:gap-6">
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

export default Home;