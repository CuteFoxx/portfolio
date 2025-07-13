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
      className={`group relative block w-fit overflow-hidden ${className}`}
      target="_blank"
    >
      <div className="before:bg-font pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-[150%] translate-y-[100%] rounded-full p-2 opacity-0 transition-all duration-400 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 before:absolute before:top-0 before:left-0 before:-z-10 before:block before:h-full before:w-full before:rounded-full before:opacity-0 before:transition-all before:delay-100 before:duration-400 before:content-[''] group-hover:before:opacity-100">
        <MdOutlineArrowOutward className="text-background" size={32} />
      </div>

      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-all duration-600 group-hover:brightness-50"
      />
    </a>
  );
};

export default LinkImage;
