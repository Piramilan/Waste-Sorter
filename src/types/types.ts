export type UploadedImage = {
  name: string;
  url: string;
  predictions: ClassPrediction[];
};

export type ClassPrediction = {
  className: string;
  probability: number | string;
};

export type ImageListProps = {
  images: UploadedImage[];
};
