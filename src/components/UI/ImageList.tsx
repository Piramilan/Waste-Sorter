import Image from "next/image";
import { useEffect, useState } from "react";

type UploadedImage = {
  name: string;
  url: string;
  predictions: ClassPrediction[];
};
type ClassPrediction = {
  className: string;
  probability: number | string;
};
type ImageListProps = {
  images: UploadedImage[];
};

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [predictionImages, setPredictionImages] = useState<UploadedImage[]>([]);
  useEffect(() => {
    setPredictionImages(images);
  }, [images]);

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
      {predictionImages?.map((image, index) => (
        <div
          key={index}
          className="flex relative flex-col items-center pb-8 bg-[#0f172a] justify-center border border-gray-300"
        >
          {image && (
            <>
              <Image
                src={image.url}
                alt={image.name}
                width={400}
                height={400}
                id="image"
              />
              <div className="flex items-center absolute bottom-0 justify-center">
                <p className="text-lg font-bold">
                  {image.predictions.map((item, index) => (
                    <span key={index} className="text-[#fff]">
                      {item.probability !== 0 && `${item.className} Waste`}
                    </span>
                  ))}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
