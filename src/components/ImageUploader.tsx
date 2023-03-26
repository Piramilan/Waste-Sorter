import Image from "next/image";
import { useState } from "react";
import TextButton from "./UI/TextButton";

export default function ImageUploader() {
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];
      const imageArray: (string | ArrayBuffer | null)[] = [...images];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageArray.push(reader.result);
          setImages((prevImages) => [reader.result, ...prevImages]);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
  };

  return (
    <div className="max-w-[80vw] mx-auto">
      <h1 className="text-white font-semibold text-[1.75rem] leading-tight lg:text-5xl text-center">
        Classify Your Waste as Organic or Recyclable with Machine Learning
      </h1>

      <div>
        <div className="flex justify-center items-center my-8">
          <input
            type="file"
            multiple
            accept="image/*"
            required
            onChange={handleImageChange}
            className="file:bg-gradient-to-b
                   file:from-blue-500 file:to-blue-600
                   file:px-6 file:py-3
                   file:m-5 file:border-none 
                   file:rounded-full file:text-white 
                   file:cursor-pointer file:shadow-lg 
                   file:shadow-blue-600
font-bold
                   file:active:scale-90 file:transition file:duration-150
                   
                   px-2
                   bg-gradient-to-br from-gray-600 to-gray-700
                   text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center  justify-center bg-gray-100 border border-gray-300"
            >
              {image && (
                <Image
                  src={image.toString()}
                  alt="Uploaded Image"
                  width={400}
                  height={400}
                />
              )}
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <div className="flex justify-center items-center mt-4">
            <TextButton link={`/results?images=${JSON.stringify(images)}`}>
              Predicte It
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
}
