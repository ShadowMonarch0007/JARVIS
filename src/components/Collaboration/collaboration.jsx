import { brainwaveSymbol, check } from "@/components/assets";
import lg from "@/components/Collaboration/assets/jarvis.png";
import { collabApps, collabContent, collabText } from "@/components/data";
import Button from "@/components/Collaboration/subcomponents/Button";
import Section from "@/components/Collaboration/subcomponents/Section";
import { LeftCurve, RightCurve } from "@/components/ui/Collaboration";
import Image from "next/image";
import Link from "next/link";

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="text-3xl lg:text-5xl mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <Image className="h-6 w-6" src={check} alt="check" />
                                    <h6 className="text-sm lg:text-base ml-5">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="text-sm lg:text-base mt-3 text-[#757185]">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>

                    <Button className="text-white">Try it now</Button>
                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="text-sm lg:text-base mb-8 text-[#757185] md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-[#252134] rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-[#252134] rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full">
                                <div className="flex items-center justify-center w-full h-full rounded-full">
                                    <Image src={lg} className="h-[88] w-[88]" alt="JARVIS" />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                                    style={{
                                        transform: `rotate(${index * 45}deg)`,
                                    }}
                                >
                                    <a href={app.backgroundUrl}>
                                        <div
                                            className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-[#FFFFFF]/15 rounded-xl"
                                            style={{
                                                transform: `rotate(-${index * 45}deg)`,
                                            }}
                                        >
                                            <Image
                                                className="m-auto"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
