import type { AnchorHTMLAttributes } from "react";

type BasicLinkProps = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicLink = ({ children, ...rest }: BasicLinkProps) => {
  return (
    <a target="_blank" {...rest}>
      {children}
    </a>
  );
};

export default BasicLink;
