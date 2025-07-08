import type { ProjectType, GalleryType } from "../types/Project";
import LinkImage from "./LinkImage";

const Gallery = ({
  project,
  className,
}: {
  project: ProjectType;
  className?: string;
}) => {
  return (
    <section className={className}>
      {project.gallery.map((gallery: GalleryType) => {
        return (
          <LinkImage
            href={project.projectLinks[0]}
            imgSrc={gallery.img}
            alt={gallery.alt}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
