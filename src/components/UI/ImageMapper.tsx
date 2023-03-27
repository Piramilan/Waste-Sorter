import Image from "next/image";
import React from "react";

type Props = {
  index: number;
  image: any;
};

const ImageMapper = ({ image, index }: Props) => {
  return (
    <div
      key={index}
      className="flex relative flex-col items-center pb-8 bg-primary justify-center border border-gray-300"
    >
      {image && (
        <>
          <Image src={image?.url} alt={image?.name} width={400} height={400} />
          <div className="flex items-center absolute bottom-0 justify-center">
            <p className="text-lg font-bold">
              {image.predictions &&
                image?.predictions?.map(({ item, index }: any) => (
                  <span key={index} className="text-[#fff]">
                    {item?.probability !== 0 && `${item?.className} Waste`}
                  </span>
                ))}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageMapper;
