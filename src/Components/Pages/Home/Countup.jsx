import CountUp from 'react-countup';
const Countup = () => {
    return (
        <div className="dark:bg-[#1E1E1E] bg-white  shadow-md rounded-lg z-20 h-44 ">
            <div className=" w-full p-2 z-20">
                <p >Experience</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className='py-4 px-2 flex justify-center items-center flex-col'>
                <p className='text-sm'>Project Completed</p>
                <p className='font-bold text-7xl'><CountUp start={2} duration={1} end={10} />+</p>
            </div>

        </div>
    );
};

export default Countup;