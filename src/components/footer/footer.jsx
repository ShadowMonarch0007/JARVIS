import React from "react";
import Social from "./subcomponents/social";

export default async function Footer() {
    return (
        <div className="p-5 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between p-20">
                <p className="text-[#757185] text-sm">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                <Social />
            </div>
        </div>
    )
}