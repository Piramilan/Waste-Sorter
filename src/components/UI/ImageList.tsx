import { ImageListProps, UploadedImage } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { classNames } from "@/config/config";
import ToggleButton from "./ToggleButton";

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [predictionImages, setPredictionImages] = useState<UploadedImage[]>([]);
  const [carouselActivate, setCarouselActivate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onCarouselActivate = () => {
    setCarouselActivate(!carouselActivate);
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {predictionImages && predictionImages.length >= 2 && isMobile && (
        <div className="flex justify-end items-center max-w-[85vw]">
          <span className="text-slate-300 mr-4">Carousel View</span>
          <ToggleButton value={carouselActivate} onClick={onCarouselActivate} />
        </div>
      )}
      {predictionImages &&
      predictionImages.length >= 2 &&
      isMobile &&
      carouselActivate ? (
        <Carousel images={predictionImages} />
      ) : (
        predictionImages?.map((image, index) => (
          <div
            key={index}
            className="flex relative flex-col items-center pb-8 bg-primary justify-center border border-gray-300 active:scale-90 transition duration-150"
          >
            {image && (
              <>
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={400}
                  className="max-h-[250px] object-contain"
                />
                {image.predictions.map((item, index) => {
                  if (item.probability !== 0) {
                    return (
                      <div
                        className={`flex items-center absolute bottom-0 justify-center ${
                          item.className === classNames.ORGANIC_WASTE
                            ? "bg-organic"
                            : "bg-recyclable"
                        } w-full`}
                        key={index}
                      >
                        <p className="text-lg font-bold">
                          <span className="text-[#fff]">
                            {item.className} Waste
                          </span>
                        </p>
                      </div>
                    );
                  }
                })}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ImageList;
