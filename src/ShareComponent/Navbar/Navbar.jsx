import { NavLink } from "react-router-dom";
import './navbar.css'


const Navbar = () => {

    const navElement = <>
        <NavLink to='/' className='mr-4 text-black font-bold text-lg px-4 py-2'>Home</NavLink>
        <NavLink to='/about' className='mr-4 text-black font-bold text-lg px-4 py-2'>About</NavLink>
        <NavLink to='/project' className='mr-4 text-black font-bold text-lg px-4 py-2'>Project</NavLink>
        <NavLink to='/contact' className='mr-4 text-black font-bold text-lg px-4 py-2'>Contact</NavLink>
    </>

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-[100px]" src="https://i.ibb.co/Sf6HC9X/24711982-6995929-ai.png" alt="" />
                    <p className="text-4xl font-bold">BULBUL</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navElement}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div tabIndex={0} role="button" className="btn text-4xl btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;