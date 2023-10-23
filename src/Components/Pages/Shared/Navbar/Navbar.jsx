import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const navoptions = <>
        <NavLink to='/' className='text-xl my-2'>Home</NavLink>
        <NavLink to='/about' className='text-xl my-2'>About</NavLink>
        <NavLink to='/portfulio' className='text-xl my-2'>Portfulio</NavLink>
        <NavLink to='/contact' className='text-xl my-2'>Contact</NavLink>
        <NavLink to='/blogs' className='text-xl my-2'>Blogs</NavLink>
        <a className='text-xl bg-black text-white px-4 py-2 rounded-full text-center flex justify-center items-center hover:bg-[#9D3535] ' href='/src/assets/resumeOfSayemSaadat.pdf'>Resume</a> 
    </>
    return (
        <div className="navbar bg-base-100 items-center  md:flex justify-between text-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-0  bg-base-100  w-40">
                        {navoptions}
                    </ul>
                </div>
                <a href='/' className="text-2xl font-semibold">Sayem.dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5">
                    {navoptions} 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;