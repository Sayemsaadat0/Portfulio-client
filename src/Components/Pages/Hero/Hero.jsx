import Typewriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
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

            <div className='flex gap-1  py-3 group items-center justify-center '>
                <a className='underline' download={true} href="/resume.pdf">Download Resume</a>
                <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
            </div>
        </div>
    );
};

export default Hero;