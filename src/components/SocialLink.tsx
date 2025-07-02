import React, { type HTMLAttributes } from "react";

const SocialLink = ({
  children = null,
  icon = null,
  href,
}: {
  children: React.ReactNode;
  icon: React.ReactElement<HTMLAttributes<HTMLDivElement>> | null;
  href: string;
}) => {
  let coloredIcon;
  if (icon != null) {
    coloredIcon = React.cloneElement(icon, {
      className:
        "text-white transition-all duration-400 group-hover:text-background",
    });
  }

  return (
    <a
      target="_blank"
      rel="no-follow"
      href={href}
      className="flex group p-3 px-6 items-center justify-center gap-2 border-1 rounded-full overflow-clip hover:text-background transition-all w-fit relative before:block before:absolute before:content-[''] before:bg-white before:w-full before:h-full before:scale-0 hover:before:scale-100 before:transition-all before:rounded-full before:duration-400 before:-z-10"
    >
      {coloredIcon} {children}
    </a>
  );
};

export default SocialLink;
