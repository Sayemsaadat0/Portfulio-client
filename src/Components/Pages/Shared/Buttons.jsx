import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Buttons = ({to, text}) => {
    return (
        <div className=' group items-center justify-center '>
            <Link  to={to} className='text-xs flex w-full hover:bg-black hover:text-white duration-700 justify-center items-center gap-1  mt-3 rounded-full p-1 px-2 border dark:bg-neutral-700/40 '>{text}
                <BsArrowRight  className='group-hover:translate-x-2 duration-700'></BsArrowRight>
            </Link>
        </div>
    );
};

export default Buttons;