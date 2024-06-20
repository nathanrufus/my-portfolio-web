"use client"
import { BsBackpack2 } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaBars, FaXmark } from "react-icons/fa6"
import Link from "next/link";
import { useState } from "react";

function Nav() {
    const Items = [
        { link: "Home", path: "home" },
        { link: "My Majors", path: "majors" },
        { link: "Projects", path: "projects" },
        { link: "Services", path: "services" }
    ];
    const [ismenuopen, setismenuopen] = useState(false)
    const togglemenu = () => {
        setismenuopen(!ismenuopen)
    }

    return (
        <>
            <nav className="bg-White md:px-14 p-4 max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center justify-between space-x-6">
                        <Link href={"/"} className="flex space-x-2 items-center">
                            <BsBackpack2 className="text-2xl text-green-600" />
                            <span className="text-xl text-green-600 font-roboto">Kibet Nathan</span>
                        </Link>
                        <ul className="md:flex space-x-3 hidden">
                            {Items.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/${item.path}`} className="block hover:text-green-600 hover:underline underline-offset-4 text-xl font-roboto" >
                                        {item.link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:flex space-x-5 hidden items-center">
                        {/* Additional items can go here */}
                        <Link href={"/contact"}> <MdOutlineContactSupport className="text-2xl text-green-600" /></Link>
                        <button className=" py-2 px-4 transition-all duration-500 rounded bg-green-600 text-White hover:bg-bgColor hover:text-green-600 hover:border-green-600">Write a Review</button>
                    </div>
                    {/* menu btn only on mobile */}
                    <div className=" md:hidden">
                        <button
                            onClick={togglemenu}
                            className=" text-white focus:outline-none focus:text-gray-300"
                        >
                            {ismenuopen ? (
                                <FaXmark className=" w-6 h-6 text-primary" />
                            ) : (
                                <FaBars className=" w-6 h-6 text-primary " />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-2 pt-20 px-4 pb-5 bg-bgColor text-xl ${ismenuopen ? " block fixed top-0 right-0 left-0" : " hidden"}`}>
                {Items.map((item, index) => (
                    <Link key={index} href={`/${item.path}`} className="block hover:text-green-600 font-roboto" >
                        {item.link}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Nav;
