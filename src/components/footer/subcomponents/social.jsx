import React from "react";
import Link from "next/link";
import Image from "next/image";
import li from "@/components/footer/assets/linkedin.svg"
import gh from "@/components/footer/assets/github.svg"
import ig from "@/components/footer/assets/instagram.svg"
import x from "@/components/footer/assets/x.svg"
import discord from "@/components/footer/assets/discord.svg"
import telegram from "@/components/footer/assets/telegram.svg"

export default async function Social() {
    return (
        <div>
            <div className="flex gap-5">
                <Link className="bg-blue-800 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-blue-800 rounded-full p-2 h-10 w-10" href="https://www.linkedin.com/in/aditya-chandra-b89470285"><Image className="bg-transparent" src={li}/></Link>
                <Link className="bg-gray-800 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-gray-800 rounded-full p-2 h-10 w-10" href="https://github.com/ShadowMonarch0007"><Image className="bg-transparent" src={gh}/></Link>
                <Link className="bg-indigo-500 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-indigo-500 rounded-full p-2 h-10 w-10" href="http://discordapp.com/users/dragon_emperor007"><Image className="bg-transparent" src={discord}/></Link>
                <Link className="bg-black md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-black rounded-full p-2 h-10 w-10" href="https://twitter.com/Aditya_rs_jake?s=09"><Image className="bg-transparent" src={x}/></Link>
                <Link className="bg-gradient-to-bl from-blue-500 via-red-500 to-yellow-500 lg:from-[#333333]/70 md:from-[#333333]/70 lg:via-[#333333]/70 md:via-[#333333]/70 lg:to-[#333333]/70 md:to-[#333333]/70 hover:from-blue-500 hover:via-red-500 via-50% hover:to-yellow-500 rounded-full p-2 h-10 w-10" href="https://www.instagram.com/rs_jake/"><Image className="bg-transparent" src={ig}/></Link>
                <Link className="bg-sky-500 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-sky-500 rounded-full p-2 h-10 w-10" href="https://t.me/rs_jake"><Image className="bg-transparent" src={telegram}/></Link>
            </div>
        </div>
    )
}