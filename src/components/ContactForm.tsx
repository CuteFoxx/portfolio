import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string("").min(3, "The name should be at least 3 characters long."),
  email: z.email(),
  message: z
    .string()
    .min(5, "Please enter a message longer than 5 characters."),
});

type formFields = z.infer<typeof schema>;
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<formFields> = (fields) => {
    console.log(fields);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-2 text-xl font-bold">Contact form</h2>

      <div className="grid gap-1">
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && (
          <span className="text-sm text-red-500/80">{errors.name.message}</span>
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

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
