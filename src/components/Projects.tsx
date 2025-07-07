import Project from "./Project";

const Projects = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <h2 className="section-title !text-xl mb-6">/Projects</h2>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
