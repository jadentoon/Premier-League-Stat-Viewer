import { useState } from "react";
import {HiMenuAlt3, HiOutlineX, HiOutlineUserGroup, HiOutlineHome, HiOutlineClipboardList , HiOutlineSearch, HiOutlineFlag} from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar(){

    const navItems = [
        {label: "Home", icon: <HiOutlineHome size="25"/>, route: "/"},
        {label: "Clubs", icon: <HiOutlineUserGroup size="25"/>, route: "/clubs"},
        {label: "Nationalities", icon: <HiOutlineFlag size="25"/>, route: "/nationality"},
        {label: "Position", icon: <HiOutlineClipboardList  size="25"/>, route: "/position"},
        {label: "Search", icon: <HiOutlineSearch size="25"/>, route: "/search"},
    ]

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav((prev) => !prev)
    const [hover, setHover] = useState(null);

    return(
        <>
            <div className='flex justify-between items-center w-full py-[10px] px-[10%] fixed gap-[50px] bg-purple-300 drop-shadow-xl z-50'>
                <ul className='hidden md:flex w-full justify-between'>
                    {navItems.map((item, index) => (
                        <li
                        key={item.label}
                        className="p-4 cursor-pointer text-md w-20"
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}
                        >
                            <Link to={item.route}>
                                {hover === index ? item.label :item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={handleNav} className='block md:hidden cursor-pointer px-[100%]'>
                    {nav ? <HiOutlineX size={20}/> : <HiMenuAlt3 size={20}/>}
                </div>
            </div>

            {nav && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                ></div>
            )}

            <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full bg-purple-300 border-r border-r-purple-900 ease-in-out duration-500 z-50 md:hidden' : 'fixed left-[-100%]'}>
                <ul className='uppercase p-4 opacity-100 z-50'>
                    {navItems.map((item, index) => (
                        <li
                        key={item.label}
                        className='p-4 border-b cursor-pointer border-gray-600'>
                            <Link to={item.route}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
} export default Navbar