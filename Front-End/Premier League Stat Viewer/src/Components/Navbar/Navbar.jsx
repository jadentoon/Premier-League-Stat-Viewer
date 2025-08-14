import { useState } from "react";
import {HiMenuAlt3, HiOutlineX, HiOutlineUserGroup, HiOutlineHome, HiOutlineClipboardList , HiOutlineSearch, HiOutlineFlag} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Navbar(){

    const navItems = [
        {label: "Home", icon: HiOutlineHome, route: "/"},
        {label: "Clubs", icon: HiOutlineUserGroup, route: "/clubs"},
        {label: "Nationalities", icon: HiOutlineFlag, route: "/nationality"},
        {label: "Position", icon: HiOutlineClipboardList, route: "/position"},
        {label: "Search", icon: HiOutlineSearch, route: "/search"},
    ]

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav((prev) => !prev)
    const [hover, setHover] = useState(null);

    const location = useLocation();

    return(
        <>
            <div className='flex justify-between items-center w-full py-[10px] px-[10%] fixed gap-12 bg-purple-300 drop-shadow-xl z-50'>
                <ul className='hidden md:flex w-full justify-between'>
                    {navItems.map((item, index) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.route;
                        return (
                            <li
                            key={item.label}
                            className={`p-4 cursor-pointer text-md w-20 flex justify-center `}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                            >
                                <Link to={item.route}>
                                    {hover === index ?
                                     item.label : 
                                     <Icon size={25} color={isActive ? "#9333EA" : "black"}/>}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div onClick={handleNav} className='block md:hidden cursor-pointer px-[100%]'>
                    {nav ? <HiOutlineX size={20}/> : <HiMenuAlt3 size={20}/>}
                </div>
            </div>

            {nav && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick = {handleNav}
                ></div>
            )}

            <div className={`fixed left-0 top-0 w-3/4 max-w-xs h-full bg-purple-300 border-r border-r-purple-900 transform transition-transform duration-500 ease-in-out z-50 md:hidden ${
                nav ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <ul className='uppercase p-4 mt-12 space-y-12'>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li
                            key={item.label}
                            className='flex items-center gap-3 p-4 border-b border-gray-600 hover:bg-purple-400 cursor-pointer transition-colors duration-300'>
                                <Icon size={25}/>
                                <Link to={item.route}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
} export default Navbar