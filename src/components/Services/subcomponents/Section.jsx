import SectionSvg from "@/components/assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-[0.0625rem] h-full bg-[#26242C] pointer-events-none md:block lg:left-[1.875rem] xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-[0.0625rem] h-full bg-[#26242C] pointer-events-none md:block lg:right-[1.875rem] xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-[1.875rem] right-[1.875rem] h-[0.0625rem] bg-[#26242C] ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
