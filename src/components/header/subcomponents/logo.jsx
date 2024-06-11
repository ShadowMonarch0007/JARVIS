import React from "react";
import Image from "next/image";
import jarvis from "@/components/header/assets/jarvis.png"

export default function Logo(){
    return(
        <div className="flex items-center gap-2">
            <Image className="h-16 w-16" src={jarvis}/>
            <p className="font-bold text-3xl font-code">JARVIS</p>
        </div>
    );
}