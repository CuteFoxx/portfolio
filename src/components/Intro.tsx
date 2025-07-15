import { FaLinkedinIn } from "react-icons/fa";
import Link from "./Link";
import SocialLink from "./SocialLink";
import { PiGithubLogoFill } from "react-icons/pi";
import { motion, type MotionProps } from "framer-motion";

const Intro = ({ className = "", ...rest }) => {
  return (
    <motion.div
      id="intro"
      initial={{ "--opacity": 0 }}
      animate={{ "--opacity": 0.1 }}
      transition={{ duration: 2 }}
      className={`circle relative min-h-full before:-z-10 before:h-[20rem] before:w-[20rem] before:translate-x-[125%] before:-translate-y-[125%] lg:pb-20 ${className}`}
      {...rest}
    >
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 sm:justify-between">
            <Word
              initial={{ opacity: 0, x: -75 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Full-stack
            </Word>
            <Link
              initial={{ opacity: 0 }}
              transition={{ delay: 1.45, ease: "easeInOut", duration: 0.55 }}
              animate={{ opacity: 1 }}
              className="hidden lg:flex"
              href="#projects"
            >
              Projects
            </Link>
          </div>
          <div className="ml-auto flex w-fit gap-1 sm:justify-between lg:ml-0 lg:w-full">
            {/* TODO REPLACE  */}
            <Description className="hidden lg:block" />
            <Word
              initial={{ opacity: 0, x: 75 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Developer
            </Word>
          </div>
        </div>
        <Description className="mt-8 block lg:hidden" />
        <Link
          initial={{ opacity: 0 }}
          transition={{ delay: 1.45, ease: "easeInOut", duration: 0.55 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex lg:hidden"
          href="#projects"
        >
          Projects
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 1.45, ease: "easeInOut", duration: 0.55 }}
        animate={{ opacity: 1 }}
        className="mt-14 flex gap-4 lg:mt-20 lg:px-20"
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Intro;

type wordProps = {
  children: React.ReactNode;
  className?: string;
};

type WordProps = wordProps & MotionProps & React.HTMLAttributes<HTMLDivElement>;

const Word = ({ children, className, ...rest }: WordProps) => {
  return (
    <motion.span
      className={`word font-secondary :text-6xl text-[3.2rem] font-[600] lg:text-8xl xl:text-9xl ${className}`}
      {...rest}
      transition={{ delay: 0.9, duration: 0.45, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      transition={{ delay: 1.45, ease: "easeInOut", duration: 0.55 }}
      animate={{ opacity: 1 }}
      className={`text-primary lg:max-w-120 lg:pr-12 lg:text-xl ${className}`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <span className="text-font italic">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      Vero nobis iure ipsum iusto, autem mollitia!
    </motion.p>
  );
};
