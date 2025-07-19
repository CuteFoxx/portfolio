import { useEffect } from "react";
import Experience from "./Experience";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

const Work = ({ className = "", ...rest }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-200px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      animate([["#glyanec", { opacity: 1 }, { duration: 1.5, delay: 0.8 }]]);
    }
  }, [animate, controls, isInView]);

  return (
    <motion.div ref={scope} className={`${className}`}>
      <motion.h2
        variants={{ visible: { opacity: 1, x: 0 } }}
        initial={{ opacity: 0, x: -75 }}
        animate={controls}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className={`section-title-secondary`}
        {...rest}
      >
        Work
      </motion.h2>
      <div>
        <Experience
          initial={{ opacity: 0 }}
          id="glyanec"
          companyName="Glyanec"
          jobTitle="Full-stack developer"
          techStack="JavaScript & PHP"
          startDate={new Date("2024-06-11")}
        />
      </div>
    </motion.div>
  );
};

export default Work;
