const Button = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) => {
  return (
    <a
      className={`bg-white rounded-full  text-background italic p-3 flex items-center justify-center h-min w-full md:w-max md:min-w-60 text-center ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
