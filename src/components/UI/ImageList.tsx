import { ImageListProps, UploadedImage } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import ImageMapper from "./ImageMapper";

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [predictionImages, setPredictionImages] = useState<UploadedImage[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768;
      setIsMobile(isMobileSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setPredictionImages(images);
  }, [images]);
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
      {predictionImages && predictionImages.length >= 2 && isMobile ? (
        <Carousel images={predictionImages} />
      ) : (
        predictionImages?.map((image, index) => (
          // <ImageMapper image={image} index={index} />
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
        ))
      )}
      {/* {predictionImages && predictionImages.length > 2 && (
        <Carousel images={predictionImages} />
      )} */}
    </div>
  );
};

export default ImageList;
