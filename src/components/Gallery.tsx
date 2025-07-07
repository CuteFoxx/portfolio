import { cva, type VariantProps } from "class-variance-authority";

const galleryVarians = cva("gallery-item", {
  variants: {
    intent: {
      primary: ["[&>*:nth-child(1)]:w-full"],
      secondary: ["test"],
    },
  },
});

interface galleryProps extends VariantProps<typeof galleryVarians> {
  children: React.ReactElement[];
}

const Gallery = ({ children, intent, ...props }: galleryProps) => {
  return (
    <section
      className={`[&>*]:rounded-4xl [&>*]:max-h-[300px] [&>*:nth-child(n+4)]:hidden ${galleryVarians(
        { intent }
      )}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Gallery;
