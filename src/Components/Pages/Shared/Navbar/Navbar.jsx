import React from 'react';



const Navbar = () => {
    const navoptions = <>
        <a href='#hero' className='text-xl my-2 text-primary'>Home</a>
        <a href='#about' className='text-xl my-2'>About</a>
        <a href='#portfulio' className='text-xl my-2'>Portfulio</a>
        <a href='#contact' className='text-xl my-2'>Contact</a>
        <a className='btn rounded-full  btn-neutral hover:bg-primary border-none' href='/src/assets/resumeOfSayemSaadat.pdf'>Resume</a> 
    </>
    return (
        <div className="navbar z-10 bg-white max-w-[1366px] items-center  md:flex justify-between text-center fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-white w-52">
                        {navoptions}
                    </ul>
                </div>
                <a href='/' className="text-2xl font-semibold">Sayem.dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal bg-white flex gap-5">
                    {navoptions} 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;