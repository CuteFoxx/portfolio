export type ProjectType = {
  name: string;
  projectLinks: string[];
  gallery: GalleryType[];
};

export type GalleryType = {
  img: string;
  alt: string;
};
