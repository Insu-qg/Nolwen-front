export type ImageType = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type Section = {
  id: number;
  attributes: {
    title: string;
    content: string;
    type: 'forme1' | 'forme2' | 'forme3' | 'forme4' | 'forme5';
    order: number;
    image?: ImageType;
  };
};