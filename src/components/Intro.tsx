import { FaLinkedinIn } from "react-icons/fa";
import Link from "./Link";
import SocialLink from "./SocialLink";
import { PiGithubLogoFill } from "react-icons/pi";

const Intro = ({ className = "", ...rest }) => {
  return (
    <div
      id="intro"
      className={`relative min-h-full lg:pb-20 ${className}`}
      {...rest}
    >
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 sm:justify-between">
            <Word>Full-stack</Word>
            <Link className="hidden lg:flex" href="#projects">
              Projects
            </Link>
          </div>
          <div className="flex gap-1 sm:justify-between">
            {/* TODO REPLACE  */}
            <Description className="hidden lg:block" />
            <span className="font-secondary ml-auto text-5xl font-[500] sm:ml-0 md:text-6xl lg:text-8xl xl:text-9xl">
              Developer
            </span>
          </div>
        </div>
        <Description className="mt-8 block lg:hidden" />
        <Link className="mt-4 flex lg:hidden" href="#projects">
          Projects
        </Link>
      </div>

      <div className="mt-14 flex gap-4 lg:mt-20 lg:px-20">
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
    <span className="font-secondary text-5xl font-[500] md:text-6xl lg:text-8xl xl:text-9xl">
      {children}
    </span>
  );
};

const Description = ({ className }: { className: string }) => {
  return (
    <p className={`text-primary lg:max-w-120 lg:text-xl ${className}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <span className="text-font italic">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      Vero nobis iure ipsum iusto, autem mollitia!
    </p>
  );
};
