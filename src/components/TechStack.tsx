const TechStack = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-3xl overflow-hidden border-[0.5px] border-white/50 p-6 font-secondary hover:bg-white transition-all duration-500 group bg-background">
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
