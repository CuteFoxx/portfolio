import { type ProjectType } from "../types/Project";
import Project from "./Project";
import projects from "../data/projects.json";

const intents = ["primary", "secondary"] as const;

const Projects = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <h2 className="section-title mb-6 !text-xl lg:ml-115">/Projects</h2>
      <div className="grid gap-40 lg:gap-60">
        {projects.map((project: ProjectType, index) => {
          return (
            <Project
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
