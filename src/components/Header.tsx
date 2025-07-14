import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion, useAnimate } from "framer-motion";

function Header() {
  const [open, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled((prev) => {
        if (prev !== scrolled) {
          return scrolled;
        }
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (
        (!menuRef.current?.contains(target) &&
          target.tagName != "svg" &&
          target.tagName != "path") ||
        target.tagName == "A"
      ) {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    animate([
      [
        "li:nth-child(1)",
        { opacity: 1, x: 0 },
        { duration: 0.4, ease: "easeIn" },
      ],
      [
        "li:nth-child(2)",
        { opacity: 1, x: 0 },
        { duration: 0.4, ease: "easeIn", at: 0.2 },
      ],
      [
        "li:nth-child(3)",
        { opacity: 1, x: 0 },
        { duration: 0.4, ease: "easeIn", at: 0.4 },
      ],
      [
        "li:nth-child(4)",
        { opacity: 1, x: 0 },
        { duration: 0.4, ease: "easeIn", at: 0.6 },
      ],
      [
        "li:nth-child(5)",
        { opacity: 1, x: 0 },
        { duration: 0.4, ease: "easeIn", at: 0.8 },
      ],
    ]);
  }, []);

  return (
    <div
      className={`font-secondary sticky top-0 z-20 mb-12 flex items-center justify-between py-3 before:absolute before:-left-[50vw] before:-z-10 before:h-full before:w-[200vw] before:content-[''] after:absolute after:-left-6 after:-z-[1] after:h-full after:w-screen after:transition-all after:duration-500 md:py-6 md:text-2xl lg:mb-40 lg:py-12 ${
        open ? "after:bg-background" : ""
      } ${isScrolled ? "before:bg-background/99" : ""}`}
    >
      <motion.h1
        id="main-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        Alisa Polishchuk
      </motion.h1>
      <nav ref={scope}>
        <ul
          id="header-nav"
          ref={menuRef}
          className={`bg-background pointer-events-none absolute top-[100%] flex w-screen flex-col items-center justify-center gap-2 p-8 opacity-0 transition-all duration-500 md:gap-4 lg:pointer-events-auto lg:static lg:w-full lg:flex-row lg:gap-12 lg:bg-transparent lg:p-0 lg:opacity-100 ${
            open ? "!pointer-events-auto -left-6 opacity-[1]" : "-left-[100%]"
          }`}
        >
          <motion.li initial={{ opacity: 0, x: -15 }}>
            <HeaderLink href="#about">About</HeaderLink>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -15 }}>
            <HeaderLink href="#projects">Projects</HeaderLink>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -15 }}>
            <HeaderLink href="#contacts">Contacts</HeaderLink>
          </motion.li>
        </ul>
      </nav>
      <div
        ref={hamburgerMenuRef}
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
