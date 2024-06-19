import React from "react";
import Social from "./subcomponents/social";
import Section from "@/components/footer/subcomponents/Section";

export default async function Footer() {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-[#757185] text-sm">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                <Social />
            </div>
        </Section>
    )
}

