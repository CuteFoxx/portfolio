import Gallery from "./Gallery";
import type { ProjectType } from "../types/Project";
import { cva, type VariantProps } from "class-variance-authority";
import Markdown from "react-markdown";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const galleryVarians = cva(
  "relative [&>*]:max-h-[300px] [&>*]:lg:max-h-[500px]  [&>*]:flex flex flex-wrap gap-5 gallery origin-right",
  {
    variants: {
      intent: {
        // I feel sorry about this, to be honest, but at the time I didn’t have any other ideas.
        primary: [
          "[&>*]:aspect-square primary [&>*:nth-child(2)]:!overflow-visible [&>*:nth-child(2)]:absolute [&>*:nth-child(2)]:z-10 [&>*:nth-child(2)]:max-h-[150px] [&>*:nth-child(2)]:lg:max-h-[250px]  [&>*:nth-child(1)]:w-full   [&>*:nth-child(2)]:aspect-[1] lg:[&>*:nth-child(1)]:aspect-auto xl:[&>*:nth-child(1)]:aspect-square [&>*:nth-child(2)]:top-[150px] [&>*:nth-child(2)]:lg:top-[250px] [&>*:nth-child(2)]:-right-0.5 [&>*:nth-child(2)]:outline-[20px]  [&>*:nth-child(2)]:outline-background [&>*:nth-child(2)]:rounded-[2.25rem] [&>*:nth-child(3)]:w-[150px] [&>*:nth-child(3)]:md:w-[250px] [&>*:nth-child(3)]:lg:w-[350px] [&>*:nth-child(3)]:mx-auto [&>*:nth-child(3)]:lg:-order-1 lg:!flex-nowrap [&>*:nth-child(1)]:after:absolute [&>*:nth-child(1)]:after:right-[168px] [&>*:nth-child(1)]:after:bottom-0 [&>*:nth-child(1)]:after:block [&>*:nth-child(1)]:after:h-16 [&>*:nth-child(1)]:after:w-16 [&>*:nth-child(1)]:after:rounded-br-[2.1rem] [&>*:nth-child(1)]:after:bg-transparent [&>*:nth-child(1)]:after:shadow-[1.3rem_1.3rem_0rem_var(--color-background)] [&>*:nth-child(1)]:after:content-[''] [&>*:nth-child(1)]:lg:after:right-[268px] [&>*:nth-child(1)]:before:absolute [&>*:nth-child(1)]:before:top-[66px] [&>*:nth-child(1)]:before:right-0 [&>*:nth-child(1)]:before:z-10 [&>*:nth-child(1)]:before:block [&>*:nth-child(1)]:before:h-16 [&>*:nth-child(1)]:before:w-16 [&>*:nth-child(1)]:before:rounded-br-[2.1rem] [&>*:nth-child(1)]:before:bg-transparent [&>*:nth-child(1)]:before:shadow-[1.3rem_1.3rem_0rem_var(--color-background)] [&>*:nth-child(1)]:before:content-[''] [&>*:nth-child(1)]:before:lg:top-[166px]",
        ],
        secondary: [
          "pb-[calc(var(--width)+(--spacing(5)))] [&>*]:shadow-md [&>*]:rounded-4xl [&>*]:shadow-secondary  lg:[&>*]:min-h-[18.75rem] lg:pb-[calc(var(--width-pc)*1.5)] grid grid-cols-[var(--width)_1fr] lg:grid-cols-[var(--width-pc)_2fr_var(--width-pc)]  [&>*:nth-child(1)]:aspect-square [&>*:nth-child(1)]:h-fit lg:[&>*:nth-child(1)]:h-full lg:[&>*:nth-child(1)]:aspect-auto [&>*:nth-child(2)]:grow-1 lg:[&>*:nth-child(2)]:aspect-auto [&>*:nth-child(3)]:w-[var(--width)] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:h-[calc(var(--width)*2)] [&>*:nth-child(3)]:top-[calc(var(--width)+(--spacing(5)))] [&>*:nth-child(2)]:w-full  [--width:7rem] [--width-pc:11rem] sm:[--width:10rem] md:[--width:11rem] lg:[&>*:nth-child(3)]:relative lg:[&>*:nth-child(3)]:top-0  [&>*:nth-child(3)]:-order-1 lg:[&>*:nth-child(3)]:h-auto lg:[&>*:nth-child(3)]:w-auto lg:[&>*:nth-child(3)]:translate-y-1/3 lg:[&>*:nth-child(2)]:-translate-y-1/3",
        ],
      },
    },
  },
);

type ProjectProps = {
  project: ProjectType;
} & VariantProps<typeof galleryVarians>;

const Project = ({ project, intent }: ProjectProps) => {
  const [scope, animation] = useAnimate();
  const isInView = useInView(scope, { margin: "-100px" });
  const galleryRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      animation([
        [
          galleryRef?.current ?? "",
          { opacity: 1, x: 0 },
          { duration: 1, delay: 0.15 },
        ],
        [".circle", { "--opacity": 1 }, { at: 0.25 }],
      ]);

      animation([
        [
          ".project-title",
          { opacity: 1, y: 0 },
          { duration: 1, ease: "backInOut" },
        ],
        [
          ".stack",
          { opacity: 1, x: 0 },
          { duration: 0.65, at: "-0.4", ease: "backIn" },
        ],
        [
          ".description",
          { opacity: 1, x: 0 },
          { duration: 0.65, at: "-0.4", ease: "backIn" },
        ],
        [
          ".links",
          { opacity: 1, x: 0 },
          { duration: 0.65, at: "-0.4", ease: "backIn" },
        ],
      ]);
    }
  }, [animation, isInView]);

  return (
    <motion.section
      ref={scope}
      key={project.id}
      initial={{ "--opacity": 0 }}
      whileInView={{ "--opacity": 0.1 }}
      transition={{ duration: 2 }}
      className="circle relative grid gap-12 before:h-[600px] before:w-[600px] before:translate-x-1/2 before:-translate-y-1/3 odd:[left:unset] even:before:!left-0 even:before:!-translate-x-2/3 lg:h-max lg:grid-cols-[2fr_5fr] lg:gap-24 even:lg:grid-cols-[5fr_2fr] even:[&>*:nth-child(1)]:!-order-2"
    >
      <Gallery
        initial={{ opacity: 0, x: 15 }}
        ref={galleryRef}
        project={project}
        className={galleryVarians({ intent: intent })}
      />
      <div className="lg:-order-1">
        <motion.h2 className="mb-4 overflow-hidden text-lg capitalize">
          <motion.span
            initial={{ opacity: 0.75, y: 100 }}
            className="project-title inline-block"
          >
            {project.name}
          </motion.span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          className="stack mb-6 flex flex-wrap gap-2"
        >
          {project.techStack.map((item, index) => {
            return (
              <span
                key={index}
                className="font-secondary border-primary/50 hover:text-background lg:text-md text-font cursor-pointer rounded-full border-1 p-2 px-3 text-sm transition-all duration-300 hover:bg-white"
              >
                {item}
              </span>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          className="description text-primary mb-4 text-xs lg:mb-12 lg:text-[0.85rem]"
        >
          <Markdown>{project.description}</Markdown>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          className="links [&>*:not(a)]:border-primary/50 group relative flex [&>*:not(a)]:rounded-full [&>*:not(a)]:border-1 [&>*:not(a)]:p-3"
        >
          <a
            href={project.sourceCode}
            aria-label="source code link"
            target="_blank"
            className="absolute top-0 right-0 bottom-0 left-0 z-10 text-[0px]"
          >
            {" "}
          </a>
          <TbBrandGithubFilled size={48} />
          <MdOutlineArrowOutward
            size={48}
            className="bg-font text-background -ml-3"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;
