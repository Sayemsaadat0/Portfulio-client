import Typewriter from 'typewriter-effect';
import Marquee from "react-fast-marquee";
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';



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
        <div>
            {/* name and title */}


            <div className='lg:flex justify-center items-end'>
                <div>

                </div>

                <div className="w-full py-5 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold titleText  text-center  whitespace-nowrap">Abu Saadat Md. Sayem</h1>
                    <p className='flex justify-center text-3xl'>
                        <Typewriter
                            options={{
                                strings: ['Frontend', 'Javascript', 'React js', 'Next js'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        Developer
                    </p>
                </div>

                <div className='hidden lg:block text-xl whitespace-nowrap'>
                    {moment().format("MMM Do YYYY")}
                </div>
            </div>



            {/* Quotes */}
            <div className='border-t-2 border-b-2 py-2'>
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
            </div>
        </div>
    );
};

export default Hero;