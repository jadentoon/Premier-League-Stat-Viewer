import { useState } from "react";
import {HiMenuAlt3, HiOutlineX, HiOutlineUserGroup, HiOutlineHome, HiOutlineClipboardList , HiOutlineSearch, HiOutlineFlag} from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar({nav, handleNav}){

    const navItems = [
        {label: "Home", icon: <HiOutlineHome size="25"/>, route: "/"},
        {label: "Clubs", icon: <HiOutlineUserGroup size="25"/>, route: "/clubs"},
        {label: "Nationalities", icon: <HiOutlineFlag size="25"/>, route: "/"},
        {label: "Position", icon: <HiOutlineClipboardList  size="25"/>, route: "/"},
        {label: "Search", icon: <HiOutlineSearch size="25"/>, route: "/"},
    ]

    const [hover, setHover] = useState(null);

    return(
        <div className='flex justify-between items-center w-full py-[10px] px-[10%] fixed gap-[50px] bg-purple-300 drop-shadow-lg z-50'>
            <ul className='hidden md:flex gap-x-10'>
                {navItems.map((item, index) => (
                    <li
                    key={item.label}
                    className="p-4 cursor-pointer text-md"
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
            <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-purple-900 bg-purple-950 ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                <ul className='uppercase p-4 bg-purple-300 border-r border-r-purple-900 opacity-100'>
                    {navItems.map((item, index) => (
                        <li
                        key={item.label}
                        className={`p-4 border-b cursor-pointer ${index !== navItems.length - 1 ? 'border-gray-600' : 'border-transparent'}`}>
                            <Link to={item.route}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} export default Navbar