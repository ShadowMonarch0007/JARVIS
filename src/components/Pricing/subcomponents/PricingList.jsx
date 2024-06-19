import { check } from "@/components/assets";
import { pricing } from "@/components/data";
import Button from "@/components/Pricing/subcomponents/Button";
import Image from "next/image";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-[#0E0C15] border border-[#252134] rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-[#FFC876] [&>h4]:even:text-[#AC6AFF] [&>h4]:last:text-[#FF776F]"
        >
          <h4 className="h4 text-[32px] leading-6 mb-4">{item.title}</h4>

          <p className="text-sm lg:text-base min-h-[4rem] mb-3 text-[#FFFFFF]/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[32px] lg:text-[40px] leading-6">&#8377;</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className={`w-full mb-6 font-code text-xs font-bold uppercase ${item.price ? "text-[#0E0C15]" : "text-[#FFFFFF]"} `}
            href={item.price ? "/pricing" : "mailto:aditya.anil.chandra@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-[#252134]"
              >
                <Image src={check} className="h-6 w-6" alt="Check" />
                <p className="text-sm lg:text-base ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
