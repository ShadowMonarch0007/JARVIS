import { companyLogos } from "@/components/data";
import Image from "next/image";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="text-xs uppercase font-light tracking-[0.15em] mb-6 text-center text-[#FFFFFF]/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
