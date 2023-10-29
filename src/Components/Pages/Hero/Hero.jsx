import Typewriter from 'typewriter-effect';
// import Marquee from "react-fast-marquee";
import { useQuery } from '@tanstack/react-query';
// import moment from 'moment';


import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {



    const { data: quotesData, isLoading } = useQuery({
        queryKey: ['quotesData'],
        queryFn: async () => {
            try {
                const res = await fetch('/quote.json');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const resData = await res.json();
                return resData;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
    });

    return (
        <div className='md:flex justify-between text-center py-4 border-b-2'>
            <div>
                <h1 className='text-2xl font-bold'>Abu Saadat Md. Sayem</h1>
                <p className='flex justify-center md:justify-start'>
                    <Typewriter
                        options={{
                            strings: ['Frontend', 'React', 'Fullstack', 'MERN Stack', 'Javascript'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    Developer
                </p>
            </div>

            <div className=' py-3 group items-center justify-center '>
                <a className='text-xs flex  bg-black text-white justify-center items-center gap-1  mt-3 rounded-full py-2 px-3 border dark:bg-neutral-700/40 ' download={true} href="/resume.pdf">Download Resume
                <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                </a>
            </div>



            {/* Quotes */}
   {/*          <div className='border-t-2 border-b-2 py-2'>
                <Marquee>
                    {quotesData ? (
                        quotesData.map((data, index) => (
                            <div key={index} className='px-40 flex'>
                                <p>"{data.quote}"</p>
                                <p className='text-sm mx-2'> {data.author}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading or data not found</p>
                    )}
                </Marquee>
            </div> */}
        </div>
    );
};

export default Hero;