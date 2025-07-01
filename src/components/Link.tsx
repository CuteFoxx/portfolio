import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) => {
  return (
    <a
      className={`items-center gap-2 group w-max h-fit overflow-hidden relative pl-14 -ml-12  min-w-[75%] max-w-[500px] lg:min-w-fit lg:max-w-[unset] ${className}`}
      href={href}
    >
      <span className="transition-all bg-white  w-12 h-12 rounded-full italic p-3  items-center justify-center scale-[0]  duration-400 -translate-x-12 group-hover:scale-100 group-hover:translate-x-0 delay-100 absolute hidden lg:flex left-0">
        <FaArrowRightLong size={16} color="var(--color-background)" />
      </span>

      <div
        className={`bg-white rounded-full italic text-background flex-1 p-3 flex items-center justify-center h-min w-max px-8  lg:p-3 md:w-max md:min-w-60 text-center`}
      >
        {children}
      </div>

      <span className="bg-white  w-12 h-12 rounded-full italic p-3 flex items-center justify-center transition-all group-hover:translate-x-16 group-hover:scale-[0] duration-400">
        <FaArrowRightLong size={16} color="var(--color-background)" />
      </span>
    </a>
  );
};

export default Button;
