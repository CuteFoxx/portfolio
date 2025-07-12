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
    <section className="font-secondary hover:text-background hover:before:bg-font group relative flex gap-12 py-4 transition-all duration-400 before:absolute before:top-0 before:-left-[50vw] before:-z-10 before:block before:h-full before:w-[200vw] before:transition-all before:duration-400 before:content-[''] md:gap-20 md:py-4">
      <Duration startDate={startDate} endDate={endDate} />
      <div className="flex flex-col justify-between gap-2 text-sm md:grow md:flex-row md:items-center md:text-xl">
        <h3>{companyName}</h3>
        <div className="md:text-md flex flex-col text-xs md:flex-row md:gap-1 lg:text-xl">
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
    <div className="text-primary group-hover:!text-background text-xs transition-all duration-400 md:text-lg">
      <div className="mb-2">
        {startYear} - {endDate.getTime() != Date.now() ? endYear : ""}
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 md:text-sm">
        <span>{years > 0 ? `${years} years` : ""}</span>
        <span>{months > 0 ? `${months} months` : ""}</span>
      </div>
    </div>
  );
};
