import { forwardRef } from "react";
import type { ProjectType, GalleryType } from "../types/Project";
import LinkImage from "./LinkImage";
import { motion, type MotionProps } from "framer-motion";

type GalleryProps = {
  project: ProjectType;
  className?: string;
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>;

const Gallery = forwardRef<HTMLDivElement, GalleryProps>(
  ({ project, className, ...rest }, ref) => {
    return (
      <motion.section className={className} ref={ref} {...rest}>
        {project.gallery.map((gallery: GalleryType, index) => {
          return (
            <LinkImage
              key={index}
              href={project.projectLinks[0]}
              imgSrc={gallery.img}
              alt={gallery.alt}
            />
          );
        })}
      </motion.section>
    );
  },
);

export default Gallery;
