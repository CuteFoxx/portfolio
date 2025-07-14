import BasicLink from "./BasicLink";
import TechStack from "./TechStack";

const About = ({ className = "", ...rest }) => {
  return (
    <div
      id="about"
      className={`section circle relative min-h-[90vh] before:right-0 before:h-[40rem] before:w-[40rem] before:translate-x-[60%] lg:min-h-max ${className}`}
      {...rest}
    >
      <div>
        <h2 className="section-title">/About_me</h2>
        <p className="text-primary mt-6 text-lg">
          Hello! I'm Alisa, I'm a{" "}
          <span className="text-font italic">full-stack developer</span>
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[7fr_4fr] lg:gap-30 xl:gap-50">
        <div className="mt-6 w-full overflow-hidden rounded-3xl grayscale-100 lg:order-2">
          <img
            className="max-h-80 w-full object-cover select-none"
            draggable={false}
            loading="lazy"
            src="/imgs/portrait.jpg"
          ></img>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:gap-6">
          <TechStack title="Front-end">
            <BasicLink href="https://tailwindcss.com/">Tailwind</BasicLink>
            <BasicLink href="https://react.dev/">React</BasicLink>
            <BasicLink href="https://vite.dev/">Vite</BasicLink>
            <BasicLink href="https://www.typescriptlang.org/">
              TypeScript
            </BasicLink>
            <BasicLink href="https://sass-lang.com/">Saas</BasicLink>
            <BasicLink href="https://ui.shadcn.com/">Shadcn</BasicLink>
            <BasicLink href="https://gsap.com/">GSAP</BasicLink>
          </TechStack>

          <TechStack className="lg:w-2/3" title="Back-end">
            <BasicLink href="https://nodejs.org">NodeJS</BasicLink>
            <BasicLink href="https://www.mongodb.com/">MongoDB</BasicLink>
            <BasicLink href="https://www.php.net/">PHP</BasicLink>
            <BasicLink href="https://symfony.com/">Symfony</BasicLink>
            <BasicLink href="https://www.mysql.com/">MySQL</BasicLink>
            <BasicLink href="https://sqlite.org/">SQLlite</BasicLink>
          </TechStack>
        </div>
      </div>
    </div>
  );
};

export default About;
