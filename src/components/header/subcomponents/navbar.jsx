"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
    const [active, setActive] = useState();

    const handleClick = (index) => {
        setActive(index);
    }
    return (
        <div className="px-5 py-2.5 lg:px-10">
            <div className="flex items-center justify-between">
                <Logo />
                <div>
                    <ul className="list-none flex flex-wrap gap-24 text-white font-normal text-xs capitalize">
                        <Link href="#"><li onClick={() => handleClick(0)} className={`${active === 0 ? 'text-[#F0E600] border-b-4 border-[#F0E600]' : 'text-[#ffffff80]'}`}>FEATURES</li></Link>
                        <Link href="#"><li onClick={() => handleClick(1)} className={`${active === 1 ? 'text-[#F0E600] border-b-4 border-[#F0E600]' : 'text-[#ffffff80]'}`}>PRICING</li></Link>
                        <Link href="#"><li onClick={() => handleClick(2)} className={`${active === 2 ? 'text-[#F0E600] border-b-4 border-[#F0E600]' : 'text-[#ffffff80]'}`}>HOW TO USE</li></Link>
                        <Link href="#"><li onClick={() => handleClick(3)} className={`${active === 3 ? 'text-[#F0E600] border-b-4 border-[#F0E600]' : 'text-[#ffffff80]'}`}>ROADMAP</li></Link>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}