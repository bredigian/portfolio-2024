export type TProject = {
  name: string;
  description: string;
  description_es: string;
  url: string;
  date: Date;
  gallery?: TGalleryImage[];
};

export type TGalleryImage = {
  url_desktop: string;
  url_mobile: string;
};
