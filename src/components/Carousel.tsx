import React from "react";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { ImageListProps } from "@/types/types";

const options: any = {
  perPage: 1,
  start: 0,
  perMove: 1,
  gap: "50%",
  type: "loop",
  pagination: true,
  arrows: true,
  width: "100%",
  classes: {
    pagination: "my-pagination",
    page: "my-page",
    active: "my-active-page",
  },
};

const Carousel: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div className="">
      <div className="mx-auto">
        <Splide options={options}>
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <div className="flex cursor-pointer relative h-[100%] max-w-[80vw] mx-auto flex-col items-center pb-8 bg-[#0f172a] justify-center border border-gray-300">
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
                            {item.probability !== 0 &&
                              `${item.className} Waste`}
                          </span>
                        ))}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
