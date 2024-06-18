import React from "react";
import Image from "next/image";
import { benefits } from "@/components/data";
import Heading from "@/components/Benefits/subcomponents/Heading";
import Section from "@/components/Benefits/subcomponents/Section";
import Arrow from "@/components/assets/svg/Arrow";
import { GradientLight } from "@/components/ui/Benefits";
import ClipPath from "@/components/assets/svg/ClipPath";
import BenefitCardBG from "@/components/Benefits/assets/image-2.png"

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with JARVIS"
                />

                <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
                    {benefits.map((item) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-cover md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={item.id}
                        >
                            <div className="absolute -translate-y-1 -translate-x-[0.75px]">
                                <Image className="w-[48rem] h-[358px]" src={item.backgroundUrl}/>
                            </div>
                            <div className="relative z-40 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-[#ADA8C3]">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <Image
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-[#0E0C15]"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <Image
                                            src={BenefitCardBG}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
