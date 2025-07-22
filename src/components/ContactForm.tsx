import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, type MotionProps } from "framer-motion";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useState } from "react";

const schema = z.object({
  name: z.string("").min(3, "The name should be at least 3 characters long."),
  email: z.email(),
  message: z
    .string()
    .min(5, "Please enter a message longer than 5 characters."),
});

const MAX_NUMBER_OF_TRIES = 3;

type formFields = z.infer<typeof schema>;
const ContactForm = ({
  ...rest
}: MotionProps & React.HtmlHTMLAttributes<HTMLFormElement>) => {
  const turnstile = useTurnstile();
  const [captchaIsValid, setCaptchaIsValid] = useState(false);
  const [numberOfTries, setNumberOfTries] = useState(3);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<formFields>({ resolver: zodResolver(schema), mode: "onSubmit" });

  const onSubmit: SubmitHandler<formFields> = async (fields) => {
    console.log("submit");
    console.log(errors);

    if (!captchaIsValid) {
      return;
    }
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.form
      {...rest}
      className="grid gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-2 text-xl font-bold lg:mb-4 lg:text-3xl">
        Contact form
      </h2>

      {!isSubmitSuccessful ? (
        <>
          <div className="grid gap-1">
            <input type="text" placeholder="Name" {...register("name")} />
            {errors.name && (
              <span className="text-sm text-red-500/80">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="grid gap-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500/80">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="grid gap-1">
            <textarea
              id="message"
              placeholder="Message"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500/80">
                {errors.message.message}
              </span>
            )}
          </div>

          <Turnstile
            className="pointer-events-none absolute"
            sitekey="0x4AAAAAABlruP0MK5Bytq6d"
            fixedSize={true}
            onVerify={(token) => {
              fetch("/api/captcha", {
                method: "POST",
                body: JSON.stringify({ token }),
              }).then((response) => {
                if (response.ok) {
                  setCaptchaIsValid(true);
                } else if (
                  numberOfTries <= MAX_NUMBER_OF_TRIES &&
                  !response.ok
                ) {
                  setNumberOfTries((prev) => (prev += 1));
                  turnstile.reset();
                }
              });
            }}
          />

          <button type="submit">Send</button>
        </>
      ) : (
        <p>Thank you for your submission. I will be in touch with you soon.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
