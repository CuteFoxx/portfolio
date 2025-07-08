import Gallery from "./Gallery";
import type { ProjectType } from "../types/Project";
import { cva, type VariantProps } from "class-variance-authority";

const galleryVarians = cva(
  "relative [&>*]:max-h-[300px] [&>*]:flex flex flex-wrap gap-5 gallery",
  {
    variants: {
      intent: {
        // I feel sorry about this, to be honest, but at the time I didn’t have any other ideas.
        primary: [
          "primary [&>*:nth-child(2)]:!overflow-visible [&>*:nth-child(2)]:absolute [&>*:nth-child(2)]:z-10 [&>*:nth-child(2)]:max-h-[150px]  [&>*:nth-child(1)]:w-full   [&>*:nth-child(2)]:aspect-[1] [&>*:nth-child(2)]:top-[150px] [&>*:nth-child(2)]:-right-0.5 [&>*:nth-child(2)]:outline-[20px]  [&>*:nth-child(2)]:outline-background [&>*:nth-child(2)]:rounded-4xl",
        ],
        secondary: ["test"],
        ternary: ["test2"],
      },
    },
  }
);

type ProjectProps = {
  project: ProjectType;
} & VariantProps<typeof galleryVarians>;

const Project = ({ project, intent }: ProjectProps) => {
  return (
    <div>
      <Gallery
        project={project}
        className={galleryVarians({ intent: intent })}
      />
    </div>
  );
};

export default Project;
