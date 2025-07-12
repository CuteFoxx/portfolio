import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [open, setIsOpen] = useState(false);

  return (
    <div
      className={`font-secondary bg-background circle sticky top-0 z-20 mb-12 flex items-center justify-between py-3 before:fixed before:-z-10 before:h-[20rem] before:w-[20rem] before:translate-x-[60%] before:-translate-y-1/2 after:absolute after:-left-6 after:-z-[1] after:h-full after:w-screen after:transition-all after:duration-500 md:py-6 md:text-2xl lg:mb-40 lg:py-12 xl:before:!-right-30 xl:before:-translate-y-[20%] ${
        open ? "after:bg-background" : ""
      }`}
    >
      <h1>Alisa Polishchuk</h1>
      <nav>
        <ul
          className={`bg-background pointer-events-none absolute top-[100%] flex w-screen flex-col items-center justify-center gap-2 p-8 opacity-0 transition-all duration-500 md:gap-4 lg:pointer-events-auto lg:static lg:w-full lg:flex-row lg:gap-12 lg:p-0 lg:opacity-100 ${
            open ? "!pointer-events-auto -left-6 opacity-[1]" : "-left-[100%]"
          }`}
        >
          <li>
            <HeaderLink href="#about">About</HeaderLink>
          </li>
          <li>
            <HeaderLink href="#">Projects</HeaderLink>
          </li>
          <li>
            <HeaderLink href="#">Contacts</HeaderLink>
          </li>
        </ul>
      </nav>
      <div
        className="block lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!open ? <RxHamburgerMenu size={32} /> : <IoCloseOutline size={32} />}
      </div>
    </div>
  );
}

export default Header;

function HeaderLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      className="before:height-[2px] relative before:absolute before:bottom-0 before:block before:h-0.5 before:w-full before:origin-bottom-left before:scale-x-0 before:bg-white before:transition-all before:duration-500 before:content-[''] hover:before:scale-x-100"
      href={href}
    >
      {children}
    </a>
  );
}
