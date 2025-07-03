import { FaLinkedinIn } from "react-icons/fa";
import Link from "./Link";
import SocialLink from "./SocialLink";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaArrowDownLong } from "react-icons/fa6";

const Intro = ({ ...rest }) => {
  return (
    <div
      id="intro"
      className="min-h-full relative lg:pb-20 overflow-hidden"
      {...rest}
    >
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex sm:justify-between gap-1">
            <Word>Full-stack</Word>
            <Link className="hidden lg:flex" href="#projects">
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
        <Link className="flex lg:hidden mt-4" href="#projects">
          Projects
        </Link>
      </div>

      <div className="mt-14 lg:mt-20 flex gap-4 lg:px-20">
        <SocialLink
          href="https://github.com/CuteFoxx"
          icon={<PiGithubLogoFill />}
        >
          GitHub
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/alicepolishchuk1/"
          icon={<FaLinkedinIn />}
        >
          Linkedin
        </SocialLink>
      </div>
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
    <p className={`lg:max-w-120 lg:text-xl  text-primary ${className}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <span className="italic text-font">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      Vero nobis iure ipsum iusto, autem mollitia!
    </p>
  );
};
