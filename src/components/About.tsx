import { useEffect, useRef } from "react";
import BasicLink from "./BasicLink";
import TechStack from "./TechStack";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

const About = ({ className = "", ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  const controls = useAnimation();

  const intialVars = { opacity: 0, x: -25 };
  const animateVars = { opacity: 1, x: 0 };
  const duration = 0.85;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      animate([
        ["#about-title", animateVars, { duration }],
        [".name", animateVars, { duration, at: duration / 2.25 }],
        ["#front-end-stack", animateVars, { duration, at: duration / 1.15 }],
        ["#back-end-stack", animateVars, { duration, at: duration * 1.25 }],
      ]);
    }
  }, [animate, controls, isInView]);

  console.log(isInView);

  return (
    <motion.div
      ref={scope}
      id="about"
      variants={{ visible: { "--opacity": 0.1 } }}
      initial={{ "--opacity": 0 }}
      animate={controls}
      transition={{ duration: duration * 3 }}
      className={`section circle relative min-h-[90vh] before:right-0 before:h-[40rem] before:w-[40rem] before:translate-x-[60%] lg:min-h-max ${className}`}
      {...rest}
    >
      <div ref={ref}>
        <div>
          <motion.h2
            id="about-title"
            initial={intialVars}
            className="section-title"
          >
            /About_me
          </motion.h2>
          <motion.p
            initial={intialVars}
            className="name text-primary mt-6 text-lg"
          >
            Hello! I'm Alisa, I'm a{" "}
            <span className="text-font italic">full-stack developer</span>
          </motion.p>
        </div>

        <div className="lg:grid lg:grid-cols-[7fr_4fr] lg:gap-30 xl:gap-50">
          <motion.div
            variants={{ visible: { opacity: 1, scale: 1, x: 0 } }}
            initial={{ opacity: 0, scale: 0.98, x: 75 }}
            animate={controls}
            transition={{ duration: duration * 1.15 }}
            className="mt-6 w-full overflow-hidden rounded-3xl grayscale-100 lg:order-2"
          >
            <motion.img
              className="max-h-80 w-full origin-right object-cover select-none"
              draggable={false}
              loading="lazy"
              src="/imgs/portrait.jpg"
            ></motion.img>
          </motion.div>
          <div className="mt-6 flex flex-col gap-4 lg:gap-6">
            <TechStack
              initial={intialVars}
              id="front-end-stack"
              title="Front-end"
              key={`first-div-${2}`}
            >
              <BasicLink href="https://tailwindcss.com/">Tailwind</BasicLink>
              <BasicLink href="https://react.dev/">React</BasicLink>
              <BasicLink href="https://vite.dev/">Vite</BasicLink>
              <BasicLink href="https://www.typescriptlang.org/">
                TypeScript
              </BasicLink>
              <BasicLink href="https://sass-lang.com/">Saas</BasicLink>
              <BasicLink href="https://ui.shadcn.com/">Shadcn</BasicLink>
              <BasicLink href="https://gsap.com/">GSAP</BasicLink>
            </TechStack>

            <TechStack
              id="back-end-stack"
              initial={intialVars}
              className="lg:w-2/3"
              title="Back-end"
            >
              <BasicLink href="https://nodejs.org">NodeJS</BasicLink>
              <BasicLink href="https://www.mongodb.com/">MongoDB</BasicLink>
              <BasicLink href="https://www.php.net/">PHP</BasicLink>
              <BasicLink href="https://symfony.com/">Symfony</BasicLink>
              <BasicLink href="https://www.mysql.com/">MySQL</BasicLink>
              <BasicLink href="https://sqlite.org/">SQLlite</BasicLink>
            </TechStack>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
