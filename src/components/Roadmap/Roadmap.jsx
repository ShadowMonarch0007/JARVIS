import Button from "@/components/Roadmap/subcomponents/Button";
import Heading from "@/components/Roadmap/subcomponents/Heading";
import Section from "@/components/Roadmap/subcomponents/Section";
import Tagline from "@/components/Roadmap/subcomponents/Tagline";
import { roadmap } from "@/components/data";
import { check2, grid, loading1 } from "@/components/assets";
import { Gradient } from "@/components/ui/Roadmap";
import Image from "next/image";
import lg from "@/components/assets/loading.png"

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we’re working on" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            className={`md:flex even:md:translate-y-[7rem] p-[0.0625rem] rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-[#252134]"
                                }`}
                            key={item.id}
                        >
                            <div className="relative p-8 bg-[#0E0C15] rounded-[2.4375rem] overflow-hidden xl:p-[3.75rem]">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <Image
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>

                                        <div className="flex items-center px-4 py-1 bg-[#FFFFFF] rounded text-[#0E0C15]">
                                            <Image
                                                className={`mr-2.5 h-4 w-4 ${item.status==="done" ? ``:`animate-spin`}`}
                                                src={item.status === "done" ? check2 : loading1}
                                                alt={status}
                                            />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>
                                    <div className="mb-10 -my-10 -mx-[3.75rem]">
                                        <Image
                                            className="w-[628px h-426px]"
                                            src={item.imageUrl}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="text-[32px] mb-4">{item.title}</h4>
                                    <p className="text-sm lg:text-base text-[#757185]">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-[3.75rem] xl:mt-20">
                <Button className={`text-xs text-white font-code font-bold uppercase`} href="/roadmap">Our roadmap</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;
