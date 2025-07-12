export type ProjectType = {
  name: string;
  projectLinks: string[];
  gallery: GalleryType[];
  techStack: string[];
  description: string;
  sourceCode: string;
};

export type GalleryType = {
  img: string;
  alt: string;
};
