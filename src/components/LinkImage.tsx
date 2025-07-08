import { MdOutlineArrowOutward } from "react-icons/md";

const LinkImage = ({
  href,
  imgSrc,
  alt,
  className,
}: {
  href: string;
  imgSrc: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      aria-label={alt}
      className={`relative group block w-fit overflow-hidden ${className}`}
      target="_blank"
    >
      <div className="absolute z-10 top-1/2 left-1/2 pointer-events-none opacity-0 transition-all duration-400 -translate-x-[150%] translate-y-[100%] group-hover:-translate-y-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100 p-2 rounded-full before:content-[''] before:absolute before:bg-font before:block before:w-full before:h-full  before:left-0 before:top-0 before:-z-10 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-400 before:delay-100">
        <MdOutlineArrowOutward className="text-background" size={32} />
      </div>

      <img
        src={imgSrc}
        alt={alt}
        className="transition-all duration-600 object-cover group-hover:brightness-50 w-full h-full"
      />
    </a>
  );
};

export default LinkImage;
