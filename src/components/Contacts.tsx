import ContactForm from "./ContactForm";

const Contacts = ({ className }: { className?: string }) => {
  return (
    <div id="contacts" className={`${className}`}>
      <h2 className="section-title-secondary mb-4">Contacts</h2>
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-40">
        <div className="grid content-baseline gap-2 [&>*]:h-fit">
          <h2 className="mb-2 text-xl font-bold">Get in touch</h2>
          <div className="flex gap-2">
            <strong>Email:</strong>
            <a href="mailto:alicepolishchuk@proton.me">
              alicepolishchuk@proton.me
            </a>
          </div>
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/alicepolishchuk1/"
            target="_blank"
          >
            Linkedin
          </a>
          <a className="font-bold" href="src\assets\cv.pdf" target="_blank">
            Resume
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
