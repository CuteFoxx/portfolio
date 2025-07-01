import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="font-secondary md:text-2xl py-3 mb-12 md:py-6 flex items-center justify-between lg:py-12 relative bg-background z-10">
      <h1>Alisa Polishchuk</h1>
      <nav>
        <ul
          className={`transition-all duration-500 top-[100%] opacity-0 pointer-events-none flex flex-col justify-center items-center w-full gap-2 md:gap-4 lg:gap-12 absolute  bg-background  p-8 lg:p-0 lg:flex-row lg:static lg:pointer-events-auto lg:opacity-100 ${
            open ? "left-0 opacity-[1] !pointer-events-auto" : "-left-[100%]"
          }`}
        >
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
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
