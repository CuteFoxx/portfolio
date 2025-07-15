import type { HTMLAttributes } from "react";
import { motion, type MotionProps } from "framer-motion";

type techStackProps = {
  title: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type TechStackProps = techStackProps &
  MotionProps &
  React.HTMLAttributes<HTMLAnchorElement>;

const TechStack = ({ title, children, ...props }: TechStackProps) => {
  const { className, ...rest } = { ...props };

  return (
    <motion.div {...rest}>
      <div
        className={`font-secondary group bg-background overflow-hidden rounded-3xl border-[0.5px] border-white/50 p-6 transition-all duration-500 hover:bg-white ${className}`}
      >
        <h2 className="group-hover:text-background mb-3 text-lg transition-all duration-500">
          {title}
        </h2>
        <div className="group-hover:[&>*]:text-background flex flex-wrap text-sm [&>*]:flex [&>*]:transition-all [&>*]:duration-500 [&>*]:not-last:after:mx-2 [&>*]:not-last:after:block [&>*]:not-last:after:content-['/']">
          {children}{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
