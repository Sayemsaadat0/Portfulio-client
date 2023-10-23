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
            <div className="h-screen heroBg relative flex items-center px-2">
                {/* left */}
                <div className="absolute top-6 md:top-52 ">
                    <h3 className="md:text-4xl font-bold ">Hey there!</h3>
                    <h1 className="md:text-7xl md:mt-4  font-bold text-2xl">I am  <span className="text-[#9D3535]">Sayem</span></h1>
                </div>

                {/* right */}
                <div className="absolute top-24  text-center  md:top-[400px] right-2 md:right-0 ">
                    <h1 className="md:text-7xl font-bold text-xl ">
                        <span className="text-[#9D3535] flex gap-2 md:gap-6">
                           <span className='text-black'>A</span>
                            <Typewriter
                                options={{
                                    strings: ["MERN Stack", "Front-End", "Full Stack", "React"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        Developer
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Home;