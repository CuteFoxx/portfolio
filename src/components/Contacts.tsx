import { useAnimate, useInView, useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

const Contacts = ({ className }: { className?: string }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-200px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      animate([
        [
          "#quick-contacts",
          { opacity: 1, x: 0 },
          { duration: 1, at: 0, delay: 0.5 },
        ],
        [
          "#contact-form",
          { opacity: 1, x: 0 },
          { duration: 1, at: 0, delay: 0.5 },
        ],
      ]);
    }
  }, [animate, controls, isInView]);

  return (
    <div ref={scope} id="contacts" className={`${className}`}>
      <motion.h2
        variants={{ visible: { opacity: 1, x: 0 } }}
        initial={{ opacity: 0, x: -75 }}
        animate={controls}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="section-title-secondary mb-4"
      >
        Contacts
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -52 }}
        id="quick-contacts"
        className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-40"
      >
        <div className="grid content-baseline gap-2 [&>*]:h-fit">
          <h2 className="mb-2 text-xl font-bold lg:mb-4 lg:text-3xl">
            Get in touch
          </h2>
          <div className="flex gap-2">
            <strong>Email:</strong>
            <a
              className="hover:underline"
              href="mailto:alicepolishchuk@proton.me"
            >
              alicepolishchuk@proton.me
            </a>
          </div>
          <a
            className="font-bold hover:underline"
            href="https://www.linkedin.com/in/alicepolishchuk1/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="font-bold hover:underline"
            href="/cv.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>

        <ContactForm initial={{ opacity: 0, x: 100 }} id="contact-form" />
      </motion.div>
    </div>
  );
};

export default Contacts;
