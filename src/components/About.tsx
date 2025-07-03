import BasicLink from "./BasicLink";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div
      id="about"
      className="section relative circle before:w-[40rem] before:h-[40rem] before:right-0 before:translate-x-[60%] min-h-[90vh]"
    >
      <div>
        <h2 className="section-title">/About_me</h2>
        <p className="text-primary text-lg mt-6">
          Hello! I'm Alisa, I'm a{" "}
          <span className="text-font italic">full-stack developer</span>
        </p>
      </div>

      <div className="lg:grid lg:gap-30 xl:gap-50 lg:grid-cols-[7fr_4fr]">
        <div className="rounded-3xl overflow-hidden w-full mt-6 grayscale-100 lg:order-2 ">
          <img
            className="object-cover w-full max-h-80 select-none"
            draggable={false}
            src="/imgs/portrait.jpg"
          ></img>
        </div>
        <div className="mt-6">
          <TechStack title="Front-end">
            <BasicLink href="https://tailwindcss.com/">Tailwind</BasicLink>
            <BasicLink href="https://react.dev/">React</BasicLink>
          </TechStack>
        </div>
      </div>
    </div>
  );
};

export default About;
