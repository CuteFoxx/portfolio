import Link from "./Link";

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex sm:justify-between gap-1">
          <Word>Full-stack</Word>
          <Link className="hidden lg:block" href="#projects">
            Projects
          </Link>
        </div>
        <div className="flex sm:justify-between gap-1">
          {/* TODO REPLACE  */}
          <Description className="hidden lg:block" />
          <span className="ml-auto sm:ml-0  font-[500] text-5xl font-secondary md:text-6xl lg:text-8xl xl:text-9xl">
            Developer
          </span>
        </div>
      </div>
      <Description className="block lg:hidden mt-8" />
      <Link className="block lg:hidden mt-4" href="#projects">
        Projects
      </Link>
    </div>
  );
};

export default Intro;

const Word = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-[500] text-5xl font-secondary md:text-6xl lg:text-8xl xl:text-9xl">
      {children}
    </span>
  );
};

const Description = ({ className }: { className: string }) => {
  return (
    <p className={`lg:max-w-80  text-primary ${className}`}>
      I like to explore new things and topics i can learn.
      <span className="italic text-font">
        {" "}
        And i do like development process in general
      </span>
    </p>
  );
};
