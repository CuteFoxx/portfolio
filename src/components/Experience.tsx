const Experience = ({
  companyName,
  jobTitle,
  techStack,
  startDate,
  endDate = new Date(Date.now()),
}: {
  companyName: string;
  jobTitle: string;
  techStack: string;
  startDate: Date;
  endDate?: Date;
}) => {
  return (
    <section className="py-4 md:py-4 relative flex gap-12 md:gap-20 font-secondar hover:text-background transition-all duration-400 before:h-full before:w-[200vw] before:block before:content-[''] before:-left-[50vw] before:transition-all hover:before:bg-font before:absolute before:-z-10 before:top-0 before:duration-400 group font-secondary">
      <Duration startDate={startDate} endDate={endDate} />
      <div className="text-sm md:text-xl flex flex-col gap-2 md:flex-row md:items-center  justify-between  md:grow">
        <h3>{companyName}</h3>
        <div className="flex flex-col md:flex-row text-xs md:gap-1 md:text-md lg:text-xl">
          <span>{`${jobTitle ?? ""} | `}</span>
          <span>{`${techStack ?? ""}`}</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;

export const Duration = ({
  startDate,
  endDate = new Date(Date.now()),
}: {
  startDate: Date;
  endDate?: Date;
}) => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const years = endYear - startYear;
  const months = endDate.getMonth() - startDate.getMonth();

  return (
    <div className="text-primary text-xs md:text-lg transition-all duration-400 group-hover:!text-background">
      <div className="mb-2">
        {startYear} - {endDate.getTime() != Date.now() ? endYear : ""}
      </div>
      <div className="flex flex-col md:text-sm md:flex-row md:gap-2 ">
        <span>{years > 0 ? `${years} years` : ""}</span>
        <span>{months > 0 ? `${months} months` : ""}</span>
      </div>
    </div>
  );
};
