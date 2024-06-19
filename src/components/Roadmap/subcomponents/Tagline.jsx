import brackets from "@/components/assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`text-xs font-light uppercase tracking-[0.15em] flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-[#ADA8C3]">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
