const Experience = ({
  companyName,
  jobTitle,
  techStack,
  startDate,
  endDate,
}: {
  companyName: string;
  jobTitle: string;
  techStack: string;
  startDate: Date;
  endDate?: Date;
}) => {
  return (
    <section className="font-secondary hover:text-background hover:before:bg-font group after:bg-font/10 relative flex gap-12 py-4 transition-all duration-400 before:absolute before:top-0 before:-left-[50vw] before:-z-10 before:block before:h-full before:w-[200vw] before:transition-all before:duration-400 after:absolute after:bottom-0 after:-left-[50vw] after:h-[0.125rem] after:w-[200vw] after:content-[''] md:gap-20 md:py-4">
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
  endDate,
}: {
  startDate: Date;
  endDate?: Date;
}) => {
  const startYear = startDate.getFullYear();
  const endYear =
    endDate?.getFullYear() != null
      ? endDate.getFullYear()
      : new Date(Date.now()).getFullYear();
  const years = endYear - startYear;
  const months =
    (endDate?.getMonth() != null
      ? endDate.getMonth()
      : new Date(Date.now()).getMonth()) - startDate.getMonth();

  return (
    <div className="text-primary group-hover:!text-background text-xs transition-all duration-400 md:text-lg">
      <div className="mb-2">
        {startYear} - {endDate?.getTime() ? endYear : "Present"}
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 md:text-sm">
        <span>{years > 0 ? `${years} years` : ""}</span>
        <span>{months > 0 ? `${months} months` : ""}</span>
      </div>
    </div>
  );
};
