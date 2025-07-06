import Experience from "./Experience";

const Work = ({ className = "", ...rest }) => {
  return (
    <div className={`${className}`}>
      <h2 className={`section-title-secondary `} {...rest}>
        Work
      </h2>
      <div>
        <Experience
          companyName="Glyanec"
          jobTitle="Full-stack"
          techStack="JavaScript & PHP"
          startDate={new Date("2024-06-11")}
        />
      </div>
    </div>
  );
};

export default Work;
