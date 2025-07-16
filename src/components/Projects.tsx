import { type ProjectType } from "../types/Project";
import Project from "./Project";
import projects from "../data/projects.json";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const intents = ["primary", "secondary"] as const;

const Projects = ({ className = "" }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <div ref={ref} id="projects" className={`${className}`}>
      <motion.h2
        initial={{ opacity: 0 }}
        variants={{ visible: { opacity: 1 } }}
        animate={controls}
        transition={{ duration: 1 }}
        className="section-title mb-6 !text-xl lg:ml-115"
      >
        /Projects
      </motion.h2>
      <div className="grid gap-40 lg:gap-60">
        {projects.map((project: ProjectType, index) => {
          return (
            <Project
              key={index}
              project={project}
              intent={intents[index % 2 === 0 ? 0 : 1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
