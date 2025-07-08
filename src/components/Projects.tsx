import { type ProjectType } from "../types/Project";
import Project from "./Project";
import projects from "../data/projects.json";

const intents = ["primary", "secondary", "ternary"] as const;

const Projects = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <h2 className="section-title !text-xl mb-6">/Projects</h2>
      <div>
        {projects.map((project: ProjectType, index) => {
          return (
            <Project
              project={project}
              intent={intents[((index - 1) % 3) + 1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
