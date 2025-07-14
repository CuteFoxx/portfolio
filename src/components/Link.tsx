import { FaArrowRightLong } from "react-icons/fa6";
import { motion, type MotionProps } from "framer-motion";

type linkProprs = {
  children: React.ReactNode;
  href: string;
  className: string;
};

type LinkProps = linkProprs &
  MotionProps &
  React.HTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, className = "", ...rest }: LinkProps) => {
  return (
    <motion.a
      className={`group relative -ml-12 h-fit w-max max-w-[500px] min-w-[75%] items-center gap-2 overflow-hidden pl-14 lg:max-w-[unset] lg:min-w-fit ${className}`}
      href={href}
      {...rest}
    >
      <span className="absolute left-0 hidden h-12 w-12 -translate-x-12 scale-[0] items-center justify-center rounded-full bg-white p-3 italic transition-all delay-100 duration-400 group-hover:translate-x-0 group-hover:scale-100 lg:flex">
        <FaArrowRightLong size={16} color="var(--color-background)" />
      </span>

      <div
        className={`text-background flex h-min w-max flex-1 items-center justify-center rounded-full bg-white p-3 px-8 text-center italic md:w-max md:min-w-60 lg:p-3`}
      >
        {children}
      </div>

      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 italic transition-all duration-400 group-hover:translate-x-16 group-hover:scale-[0]">
        <FaArrowRightLong size={16} color="var(--color-background)" />
      </span>
    </motion.a>
  );
};

export default Link;
