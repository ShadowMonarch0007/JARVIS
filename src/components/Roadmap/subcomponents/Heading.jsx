import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="text-28 lg:text-5xl">{title}</h2>}
      {text && <p className="text-sm lg:text-base mt-4 text-[#757185]">{text}</p>}
    </div>
  );
};

export default Heading;
