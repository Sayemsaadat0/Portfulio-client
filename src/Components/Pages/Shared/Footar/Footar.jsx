import { FaHeart } from 'react-icons/fa';



const Footar = () => {
    return (
        <div>
            <footer className=" max-w-[1400px] p-6 mx-auto  border-t-2   text-base-content">
                <div className='flex justify-center'>
                    <p className=" text-xl flex items-center">Made with
                     <FaHeart className='mx-3 text-red-500'></FaHeart> by Sayem Saadat</p>
                </div>
            </footer>
        </div>
    );
};

export default Footar;