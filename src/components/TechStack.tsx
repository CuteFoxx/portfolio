import type { HTMLAttributes } from "react";

type TechStackProps = {
  title: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const TechStack = ({ title, children, ...props }: TechStackProps) => {
  const { className, ...rest } = { ...props };

  return (
    <div
      className={`rounded-3xl overflow-hidden border-[0.5px] border-white/50 p-6 font-secondary hover:bg-white transition-all duration-500 group bg-background ${className}`}
      {...rest}
    >
      <h2 className="text-lg mb-3 group-hover:text-background transition-all duration-500">
        {title}
      </h2>
      <div className="text-sm flex flex-wrap [&>*]:flex [&>*]:transition-all  [&>*]:duration-500 [&>*]:not-last:after:content-['/'] [&>*]:not-last:after:block [&>*]:not-last:after:mx-2 group-hover:[&>*]:text-background">
        {children}{" "}
      </div>
    </div>
  );
};

export default TechStack;
